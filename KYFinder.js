import React from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  InputGroup,
  InputGroupButton,
} from 'reactstrap';

const styles = {
  dropDown: {
    borderRadius: '0px',
  },
  input: {
    width: '100%',
    borderRadius: '0px',
  },
  form: {
    width: '100%',
  },
};
export default class KYFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filters[0],
      input: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onInputChange(e) {
    this.setState({ input: e.target.value });
  }
  onFilterChange(e) {
    this.setState({ filter: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.submit({
      filter: this.state.filter,
      input: this.state.input,
    });
  }
  render() {
    return (
      <InputGroup>
        <InputGroupButton>
          <UncontrolledButtonDropdown>
            <DropdownToggle
              caret
              style={styles.dropDown}
            >
              { this.state.filter }
            </DropdownToggle>
            <DropdownMenu>
              {
                this.props.filters.map(filter => (
                  <DropdownItem
                    key={filter}
                    value={filter}
                    onClick={this.onFilterChange}
                    active={filter === this.state.filter}
                  >
                    {filter}
                  </DropdownItem>
                ))
              }
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </InputGroupButton>
        <Form
          style={styles.form}
          onSubmit={this.onSubmit}
        >
          <Input
            style={styles.input}
            value={this.state.input}
            onChange={this.onInputChange}
          />
        </Form>
      </InputGroup>
    );
  }
}
KYFinder.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  submit: PropTypes.func,
};
KYFinder.defaultProps = {
  submit: undefined,
};
