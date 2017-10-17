import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
} from 'reactstrap';

const styles = {
  table: {
    margin: 'auto',
    textAlign: 'center',
    fontSize: '1rem',
  },
};
export default function KYList(props) {
  return (
    <Table
      style={styles.table}
      striped
      bordered
      hover={props.hovering}
    >
      <thead>
        <tr>
          {
            props.numbering ?
              <th>번호</th> : null
          }
          {
            props.cols ? props.cols.map((col, i) =>
              <th key={`${col}${i}`}>{col}</th>,
            ) : null
          }
        </tr>
      </thead>
      <tbody>
        {
          props.rows ? props.rows.map((row, i) =>
            (
              <tr
                key={`${i}${JSON.stringify(row)}`}
                onClick={props.rowClick ? () => props.rowClick(i, row) : null}
                style={
                  props.hovering ?
                    { ':hover': { cursor: 'pointer' } } : null
                }
              >
                {
                  props.numbering ?
                    <td>
                      {
                        Object.hasOwnProperty.call(props, 'startNumber') ?
                          props.startNumber + i : (i + 1)
                      }
                    </td> : null
                }
                {
                  row.map((data, i) =>
                    <td key={`${data}${i}`}>
                      {data}
                    </td>,
                  )
                }
              </tr>
            )) : null
        }
      </tbody>
    </Table>
  );
}
KYList.propTypes = {
  hovering: PropTypes.bool,
  numbering: PropTypes.bool,
  startNumber: PropTypes.number,
  rowClick: PropTypes.func,
  cols: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
KYList.defaultProps = {
  hovering: true,
  numbering: true,
  startNumber: 1,
  rowClick: null,
  cols: [],
  rows: [[]],
};
