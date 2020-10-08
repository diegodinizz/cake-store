import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { CakeCard } from './CakeCard'

import CAKES_DATA from '../cakes.data'
import { AddCakeButton } from './AddCakeButtom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const CakesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 25%;
`

const ButtomContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const CakesPage = () => {
  const [cakesData, setcakesData] = useState([])

  useEffect(() => {
    setcakesData(CAKES_DATA)
  }, [])

  return (
    <Container>
      <CakesContainer>
        {cakesData.map(item => (
          <CakeCard key={item.id} name={item.name} imageUrl={item.imageUrl} />
        ))}
      </CakesContainer>
      <ButtomContainer>
      <AddCakeButton />
      </ButtomContainer>
    </Container>
  )
}
