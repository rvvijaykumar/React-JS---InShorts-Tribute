import React from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import Home from './home/index'
import CardPage from './card-details/index'

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/card-details/:cardId" component={CardPage} />
    </Switch>
  </Router>
)
