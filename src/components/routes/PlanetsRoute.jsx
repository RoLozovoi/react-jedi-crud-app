import React, { useState } from 'react'

import Route from '../common/Route'

const data = [
  { name: 'Hoth', climate: 'frozen', terrain: 'ice, glacier, tundra', diameter: 100030129, population: 1032, id: 1 }
]

const PlanetsRoute = () => {
  const [planets, setPlanets] = useState(data)

  const handleAddPlanet = (planetData) => {
    const data = [...planets, planetData]
    setPlanets(data)
  }

  const handleDeletePlanet = planetId => {
    setPlanets(
      planets.filter(p => p.id !== planetId)
    )
  }

  return (
    <Route
      routeName='Planets'
      data={planets}
      onRowDelete={handleDeletePlanet}
      onFormSubmit={handleAddPlanet}
    />
  )
}

export default PlanetsRoute
