import React from 'react';
import PropTypes from 'prop-types';

import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

const styles = {
  pagination: {
    display: 'inline-flex',
  },
};
export default function KYPaginator(props) {
  if (props.items < 1) {
    return (
      <div />
    );
  }
  const itemsForView = [];
  let prevJump = 1;
  let nextJump = props.items;
  if (props.items < props.maxButtons) {
    for (let i = 1; i <= props.items; i += 1) {
      itemsForView.push(i);
    }
  } else {
    prevJump = props.activePage - props.maxButtons;
    if (prevJump < 1) {
      prevJump = 1;
    }
    nextJump = props.activePage + props.maxButtons;
    if (nextJump > props.items) {
      nextJump = props.items;
    }
    itemsForView.push(props.activePage);
    let forwardStep = 1;
    let backwardStep = -1;
    let lastWasBackward = true;
    while (itemsForView.length < props.maxButtons) {
      if (lastWasBackward) {
        const forward = props.activePage + forwardStep;
        if (forward < props.items + 1) {
          itemsForView.push(forward);
          forwardStep += 1;
        }
      } else {
        const backward = props.activePage + backwardStep;
        if (backward > 0) {
          itemsForView.unshift(backward);
          backwardStep += -1;
        }
      }
      lastWasBackward = !lastWasBackward;
    }
  }
  return (
    <Pagination
      style={styles.pagination}
      size={props.size}
    >
      {
        itemsForView.findIndex(n => n === prevJump) < 0 ?
          <PaginationItem>
            <PaginationLink
              previous
              onClick={() => props.onClick(prevJump)}
            />
          </PaginationItem>
          : null
      }
      {
        itemsForView.map(o => (
          <PaginationItem
            key={o}
            active={o === props.activePage}
          >
            <PaginationLink
              onClick={() => props.onClick(o)}
            >
              {o}
            </PaginationLink>
          </PaginationItem>
        ))
      }
      {
        itemsForView.findIndex(n => n === nextJump) < 0 ?
          <PaginationItem>
            <PaginationLink
              next
              onClick={() => props.onClick(nextJump)}
            />
          </PaginationItem>
          : null
      }
    </Pagination>
  );
}
KYPaginator.propTypes = {
  size: PropTypes.string,
  items: PropTypes.number.isRequired,
  maxButtons: PropTypes.number,
  activePage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
KYPaginator.defaultProps = {
  size: undefined,
  maxButtons: 0,
};
