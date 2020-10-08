import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { CakeDetail } from './components/CakeDetail'
import { CakesPage } from './components/CakesPage'
import { GlobalStyle } from './GlobalStyle'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={CakesPage} />
        <Route path='/cakes' component={CakeDetail} />
      </Switch>
      <GlobalStyle />
    </div>
  )
}

export default App
