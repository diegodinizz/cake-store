import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 15%;
  background-color: #f56a79;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const AddCakeButton = () => {
  return <Container>add cake</Container>
}
