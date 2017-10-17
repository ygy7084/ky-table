/* global window */
import React from 'react';
import Radium, { StyleRoot } from 'radium';
import PropTypes from 'prop-types';
import {
  ButtonGroup, Button,
} from 'reactstrap';
import {
  KYButton,
} from './';

const ButtonGroupRadium = Radium(ButtonGroup);
const ButtonRadium = Radium(Button);
const styles = {
  buttonGroup: {
    base: {
      width: '100%',
    },
    open: {
      '@media screen and (max-width: 500px)': {
        display: 'grid',
      },
    },
    close: {
      '@media screen and (max-width: 500px)': {
        display: 'none',
      },
    },
  },
  menu: {
    display: 'none',
    width: '100%',
    '@media screen and (max-width: 500px)': {
      display: 'grid',
    },
  },
};
class KYButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
  }
  render() {
    return (
      <StyleRoot>
        <ButtonRadium
          style={styles.menu}
          color="info"
          outline={!this.state.toggle}
          onClick={() => this.setState({ toggle: !this.state.toggle })}
        >메뉴</ButtonRadium>
        <ButtonGroupRadium style={[
          styles.buttonGroup.base, this.state.toggle ?
            styles.buttonGroup.open : styles.buttonGroup.close]}
        >
          {this.props.children}
        </ButtonGroupRadium>
      </StyleRoot>
    );
  }
}
export default Radium(KYButtonGroup);
