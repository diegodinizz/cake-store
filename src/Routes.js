import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from './containers/Home'
import { NewCake } from './containers/NewCake'
import { NotFound } from './containers/NotFound'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/new'>
        <NewCake />
      </Route>
      {/* Catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
