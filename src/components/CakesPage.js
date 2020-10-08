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
  text-decoration: none;
  color: #000;
`

const ButtomContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const CakesPage = ({ onClick }) => {
  const [cakesData, setcakesData] = useState([])

  useEffect(() => {
    setcakesData(CAKES_DATA)
  }, [])

  return (
    <Container>
      <h1>The Cake Store</h1>
      <CakesContainer>
        {cakesData.map(({ id, name, imageUrl, ...otherCakeProps }) => (
          <CakeCard
            onClick={onClick}
            key={id}
            name={name}
            imageUrl={imageUrl}
            {...otherCakeProps}
          />
        ))}
      </CakesContainer>
      <ButtomContainer>
        <AddCakeButton />
      </ButtomContainer>
    </Container>
  )
}
