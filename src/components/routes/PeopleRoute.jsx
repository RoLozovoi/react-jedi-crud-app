import React, { useState } from 'react'

import Route from '../common/Route'

const data = [
  { first: 'Mark', last: 'Otto', handle: '@motto', id: '1' },
  { first: 'Carl', last: 'Reno', handle: '@ceno', id: '2' },
  { first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3' }
]

const PeopleRoute = () => {
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
    <Route
      routeName='People'
      data={people}
      onRowDelete={handleDeletePerson}
      onFormSubmit={handleAddPerson}
    />
  )
}

export default PeopleRoute
