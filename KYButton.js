import React from 'react';
import Radium, { StyleRoot } from 'radium';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const ButtonRadium = Radium(Button);
const styles = {
  button: {
    borderRadius: '0px',
  },
};
export default function KYButton(props) {
  return (
    <ButtonRadium
      style={styles.button}
      outline={props.outline}
      color={props.color}
      onClick={props.onClick}
    >
      {props.value}
    </ButtonRadium>
  );
}
KYButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};
KYButton.defaultProps = {
  color: undefined,
  onClick: undefined,
  value: '',
};
