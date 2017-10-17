import React from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
  DropdownItem,
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupButton,
} from 'reactstrap';

const styles = {
  dropDownWrapper: {
    width: '100%',
  },
  dropDown: {
    width: '100%',
    borderRadius: '0px',
  },
  menu: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
};
export default class KYSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      input: '',
    };
    this.onToggle = this.onToggle.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onToggle() {
    this.setState({ toggle: !this.state.toggle });
  }
  onInputChange(e) {
    this.setState({ input: e.target.value });
  }
  onFilterChange(e) {
    this.setState({ filter: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <ButtonDropdown
        style={styles.dropDownWrapper}
        isOpen={this.state.toggle}
        toggle={this.onToggle}
      >
        <DropdownToggle
          tag="span"
          caret
          style={styles.dropDown}
          data-toggle="dropdown"
          aria-expanded={this.state.toggle}
        >
          설정
        </DropdownToggle>
        <DropdownMenu style={styles.menu}>
          <DropdownItem>
            <Button style={styles.button}>버튼1</Button>
          </DropdownItem>
          <DropdownItem>
            <Button>버튼2</Button>
          </DropdownItem>
          <DropdownItem>
            <Button>버튼3</Button>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

