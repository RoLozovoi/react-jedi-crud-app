import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import PeopleRouter from './components/routes/PeopleRoute'

import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  <Router>
    <NavBar />

    <Switch>
      <Route path='/people'>
        <PeopleRouter />
      </Route>

      <Route exact path='/'>
        <Redirect to='/people' />
      </Route>
    </Switch>
  </Router>
)

export default App
