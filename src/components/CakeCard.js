import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #52575d;
  border-radius: 5px;
  width: auto;
  margin-right: 20px;
  width: auto;
`

const NameContainer = styled.div`
  text-align: center;
  margin: 0.8em;
`

const ImageContainer = styled.img`
  border-radius: 7px;
  padding: 5px;
  width: 12em;
  height: 12em;
`

export const CakeCard = ({ name, imageUrl }) => {
  return (
    <Container>
      <NameContainer>{name}</NameContainer>
      <ImageContainer src={imageUrl} />
    </Container>
  )
}
