import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { API } from 'aws-amplify'

import { CakeCard } from '../components/CakeCard'
import { CustomButton } from '../components/CustomButton'
import { Spinner } from '../components/Spinner'

import { onError } from '../libs/errorLib'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const CakesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 25%;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
  }
`

const ButtomContainer = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  text-decoration: none;

  @media (max-width: 800px) {
    width: 45%;
    margin: 30px auto;
  }
`

export const Home = () => {
  const [cakes, setCakes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    function getData () {
      const apiName = 'cakes'
      const path = '/cakes'

      return API.get(apiName, path)
    }

    async function onLoad () {
      try {
        const response = await getData()
        setCakes(response)
        setIsLoading(false)
      } catch (error) {
        onError(error)
      }
    }

    onLoad()
  }, [])

  function renderCakesList (cakes) {
    return (
      <CakesContainer>
        {cakes.map(({ id, name, imageUrl }) => (
          <CakeCard key={id} id={id} name={name} imageUrl={imageUrl} />
        ))}
      </CakesContainer>
    )
  }

  return (
    <Container>
      <h1>The Cake Store</h1>
      {isLoading ? Spinner() : renderCakesList(cakes)}
      <ButtomContainer to='/cakes/new'>
        <CustomButton>add cake</CustomButton>
      </ButtomContainer>
    </Container>
  )
}
