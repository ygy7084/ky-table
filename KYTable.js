import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Col, Row } from 'reactstrap';

import {
  KYButton,
  KYButtonGroup,
  KYListSizeSelector,
  KYFinder,
  KYList,
  KYPaginator,
  KYSettings,
} from './';

const styles = {
  grid: {
    margin: '0px',
    padding: '0px',
  },
  paginator: {
    marginTop: '10px',
    textAlign: 'center',
  },
};
class KYTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listSize: this.props.listSizes[0],
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleListSizeSelect = this.handleListSizeSelect.bind(this);
  }
  handleSelect(value) {
    this.setState({ activePage: value });
  }
  handleListSizeSelect(e) {
    this.setState({ listSize: parseInt(e.target.value, 10) });
  }
  render() {
    const startIndex = (this.state.activePage - 1) * this.state.listSize;
    const showList = this.props.list.slice(
      startIndex,
      startIndex + this.state.listSize);

    const insideKYButtonGroup = [
      <KYListSizeSelector
        key={'KYListSizeSelector'}
        value={this.state.listSize}
        numbers={this.props.listSizes}
        onClick={this.handleListSizeSelect}
      />,
    ];
    this.props.children.filter(child => child.type === KYButton)
      .forEach(ele => insideKYButtonGroup.push(ele));

    return (
      <div>
        <Row style={styles.grid}>
          <Col style={styles.grid} xs={12} md={8}>
            <KYButtonGroup>
              {insideKYButtonGroup}
            </KYButtonGroup>
          </Col>
          <Col style={styles.grid} xs={12} md={4}>
            <KYSettings />
          </Col>
        </Row>
        <KYList
          rowClick={this.props.rowClick}
          startNumber={startIndex + 1}
          cols={this.props.cols}
          rows={showList}
        />
        <div style={styles.paginator}>
          <KYPaginator
            items={Math.ceil(this.props.list.length / this.state.listSize)}
            maxButtons={this.props.maxPageButtons}
            activePage={1}
            onClick={this.handleSelect}
          />
        </div>
      </div>
    );
  }
}
KYTable.propTypes = {
  listSizes: PropTypes.arrayOf(PropTypes.number),
  list: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  children: PropTypes.arrayOf(PropTypes.element),
  rowClick: PropTypes.func,
  cols: PropTypes.arrayOf(PropTypes.string),
  maxPageButtons: PropTypes.number,
};
KYTable.defaultProps = {
  listSizes: [10, 20, 50, 100],
  list: [['list']],
  children: [],
  rowClick: undefined,
  cols: ['col'],
  maxPageButtons: 5,
};
export default Radium(KYTable);