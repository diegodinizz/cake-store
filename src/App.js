import React from 'react'
// import { Switch, Route } from 'react-router-dom'

// import { CakeDetail } from './components/CakeDetail'
// import { CakesPage } from './components/CakesPage'
import { GlobalStyle } from './GlobalStyle'
import { Routes } from './Routes'

function App () {
  return (
    <div>
      {/* <Switch>
        <Route exact path='/' component={CakesPage} />
        <Route path='/cakes' component={CakeDetail} />
      </Switch> */}
      <Routes />
      <GlobalStyle />
    </div>
  )
}

export default App
