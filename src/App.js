import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';

import People from './components/People';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Star Wars</Link>
        <div class="navbar-nav">
          <NavLink className="nav-item nav-link" activeClassName="active" to="/people">People</NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/planets">Planets</NavLink>
          <NavLink className="nav-item nav-link" activeClassName="active" to="/starships">Starships</NavLink>
        </div>
      </nav>

      <Switch>
        <Route
          path="/"
          exact
          render={() => <Redirect to="/people"></Redirect>}>
        </Route>
        <Route path="/people">
          <People />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
