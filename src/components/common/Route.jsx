import React from 'react'

import Table from './Table'
import Form from './Form'

const Route = ({ routeName, data, onRowDelete, onFormSubmit }) => {
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
