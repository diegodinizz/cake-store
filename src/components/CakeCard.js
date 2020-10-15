import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #52575d;
  border-radius: 5px;
  width: auto;
  margin-top: 20px;
  width: auto;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  :hover {
    transform: scale(1.05);
  }
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

export const CakeCard = ({ name, imageUrl, id }) => {
  return (
    <Container to={`/cakes/${id}`}>
      <NameContainer>{name}</NameContainer>
      <ImageContainer src={imageUrl} />
    </Container>
  )
}
