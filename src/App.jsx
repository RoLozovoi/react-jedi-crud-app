import React, { useState } from 'react'

import NavBar from './components/common/NavBar'
import Route from './components/common/Route'

import 'bootstrap/dist/css/bootstrap.css'

const data = [
  { first: 'Mark', last: 'Otto', handle: '@motto', id: '1' },
  { first: 'Carl', last: 'Reno', handle: '@ceno', id: '2' },
  { first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3' }
]

function App () {
  const [people, setPeople] = useState(data)

  const handleAddPerson = (personData) => {
    const data = [...people, personData]
    setPeople(data)
  }

  const handleDeletePerson = personId => {
    setPeople(
      people.filter(p => p.id !== personId)
    )
  }

  return (
    <>
      <NavBar />

      <Route
        routeName='People'
        data={people}
        onRowDelete={handleDeletePerson}
        onFormSubmit={handleAddPerson}
      />
    </>
  )
}

export default App
