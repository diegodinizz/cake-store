import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #52575d;
  border-radius: 5px;
  width: auto;
  /* margin-right: 20px; */
  width: auto;
  cursor: pointer;
  text-decoration: none;
  color: #000;
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

export const CakeCard = ({ name, imageUrl, onClick }) => {

  const handleClick = () => {
    return <Redirect to='/cakes' />
  }

  return (
    <Container onClick={handleClick}>
      <NameContainer>{name}</NameContainer>
      <ImageContainer src={imageUrl} />
    </Container>
  )
}
