import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import PeopleRoute from './components/routes/PeopleRoute'
import PlanetsRoute from './components/routes/PlanetsRoute'
import StarshipsRoute from './components/routes/StarshipsRoute'

import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  <Router>
    <NavBar />

    <Switch>
      <Route path='/people'>
        <PeopleRoute />
      </Route>

      <Route path='/planets'>
        <PlanetsRoute />
      </Route>

      <Route path='/starships'>
        <StarshipsRoute />
      </Route>

      <Route exact path='/'>
        <Redirect to='/people' />
      </Route>
    </Switch>
  </Router>
)

export default App
