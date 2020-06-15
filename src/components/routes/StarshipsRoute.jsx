import React, { useState } from 'react'

import Route from '../common/Route'

const data = [
  { name: 'TIE Fighter', crew: 1, manufacturer: 'Galactic Empire', weaponry: 'twin laser cannon', id: 1 }
]

const StarshipsRoute = () => {
  const [starships, setStarships] = useState(data)

  const handleAddStarship = (starshipData) => {
    const data = [...starships, starshipData]
    setStarships(data)
  }

  const handleDeleteStarship = starshipId => {
    setStarships(
      starships.filter(p => p.id !== starshipId)
    )
  }

  return (
    <Route
      routeName='Starships'
      data={starships}
      onRowDelete={handleDeleteStarship}
      onFormSubmit={handleAddStarship}
    />
  )
}

export default StarshipsRoute
