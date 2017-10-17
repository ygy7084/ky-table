import React from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const styles = {
  dropDown: {
    borderRadius: '0px',
    width: '100%',
  },
};
export default function KYListSizeSelector(props) {
  return (
    <UncontrolledButtonDropdown>
      <DropdownToggle
        caret
        style={styles.dropDown}
      >
        {`${props.value}개씩 보기`}
      </DropdownToggle>
      <DropdownMenu>
        {
          props.numbers.map(number => (
            <DropdownItem
              key={number}
              value={number}
              onClick={props.onClick}
              active={number === props.value}
            >
              {`${number}개씩 보기`}
            </DropdownItem>
          ))
        }
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
}
KYListSizeSelector.propTypes = {
  value: PropTypes.number,
  numbers: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func.isRequired,
};
KYListSizeSelector.defaultProps = {
  value: 10,
  numbers: [10],
};
