import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

export const NotFound = () => {
  return (
    <Container>
      <h3>Sorry, page not found!</h3>
    </Container>
  )
}
