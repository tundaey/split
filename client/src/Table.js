import React from 'react';
import { useTable } from 'react-table';
import './app.scss';

const Table = ({ columns, data }) => {
  console.log('columns', columns)
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <div className="Table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map(
            (row, i) =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  )
};

export default Table;