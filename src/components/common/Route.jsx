import React from 'react'

import Table from './Table'
import Form from './Form'

const Route = ({ routeName, data, onRowDelete, onFormSubmit }) => {
  if (data.length === 0) {
    return (
      <div className="container mt-5">
        <h2 style={{ textAlign: 'center' }}>There is no data for {routeName}</h2>
      </div>
    )
  }

  const columns = Object.keys(data[0])

  return (
    <div className="container mt-5">

      <Table
        data={data}
        columns={columns}
        tableDescriptor={routeName}
        onDeleteClick={onRowDelete}
      />
      <Form
        columns={columns}
        onSubmit={onFormSubmit}
      />

    </div>
  )
}

export default Route
