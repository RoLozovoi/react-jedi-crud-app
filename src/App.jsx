import React, { useState } from 'react'

import NavBar from './components/common/NavBar'
import Table from './components/common/Table'
import Form from './components/common/Form'

import 'bootstrap/dist/css/bootstrap.css'

const data = [
  { first: 'Mark', last: 'Otto', handle: '@motto', id: '1' },
  { first: 'Carl', last: 'Reno', handle: '@ceno', id: '2' },
  { first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3' }
]

const columns = Object.keys(data[0])

function App () {
  const [people, setPeople] = useState(data)

  const handleAppPerson = (personData) => {
    const data = [...people, personData]
    setPeople(data)
  }

  const handleDeletePerson = personId => {
    setPeople(
      people.filter(p => p.id !== personId)
    )
  }

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = ''
      return cols
    }, {})
  }

  return (
    <>
      <NavBar />

      <div className="container mt-5">
        <Table
          data={people}
          columns={columns}
          tableDescriptor="People"
          onDeleteClick={handleDeletePerson}
        />
        <Form
          initialData={getInitialPeopleData()}
          columns={columns}
          onAddData={handleAppPerson}
        />
      </div>
    </>
  )
}

export default App
