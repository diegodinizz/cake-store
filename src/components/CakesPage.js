import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { CakeCard } from './CakeCard'

import CAKES_DATA from '../cakes.data'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const CakesPage = () => {
  const [cakesData, setcakesData] = useState([])

  useEffect(() => {
    setcakesData(CAKES_DATA)
  }, [])

  return (
    <Container>
      {cakesData.map(item => (
        <CakeCard key={item.id} name={item.name} imageUrl={item.imageUrl} />
      ))}
    </Container>
  )
}
