import React from 'react'
import styled from 'styled-components'
// import { CakeCard } from './CakeCard'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #52575d;
  border-radius: 5px;
  width: auto;
  margin-right: 20px;
  width: auto;
  cursor: pointer;
  text-decoration: none;
  color: #000;
`

const ImageContainer = styled.img`
  border-radius: 7px;
  padding: 5px;
  width: 12em;
  height: 12em;
`

const NameContainer = styled.div`
  text-align: center;
  margin: 0.8em;
`

const CommentContainer = styled.div``

const YumFactorContainer = styled.div``

export const CakeDetail = ({ name, imageUrl, comment, yumFactor }) => {
  return (
    <Container>
      <h1>Cake Detail</h1>
      <ImageContainer src={imageUrl} />
      <NameContainer>{name}</NameContainer>
      <CommentContainer>Comment: {comment}</CommentContainer>
      <YumFactorContainer>Yum Factor: {yumFactor}</YumFactorContainer>
    </Container>
  )
}
