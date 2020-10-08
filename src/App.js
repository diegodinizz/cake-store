import React from 'react'

import { CakesPage } from './components/CakesPage'
import { GlobalStyle } from './GlobalStyle'

function App () {
  return (
    <div>
      <h1>The Cake Store</h1>
      <CakesPage />
      <GlobalStyle />
    </div>
  )
}

export default App
