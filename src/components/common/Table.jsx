import React from 'react'

function Table ({ columns, data, tableDescriptor, onDeleteClick }) {
  return (
    <table className="table table-dark">

      <thead>
        <tr>
          <th scope="col">{tableDescriptor}</th>
          {columns.map(columnTitle => (
            <th key={columnTitle} scope="col">{columnTitle}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>

            <th scope="row">{++index}</th>

            {columns.map(columnTitle => (
              <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
            ))}

            <td>
              <button onClick={() => onDeleteClick(item.id)}
                className='btn btn-danger'>
                Delete
              </button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
