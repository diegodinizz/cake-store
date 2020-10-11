import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { API } from 'aws-amplify'

import { CakeCard } from '../components/CakeCard'
import { AddCakeButton } from '../components/AddCakeButtom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`

const CakesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 25%;
  text-decoration: none;
  color: #000;
`

const ButtomContainer = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
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

    async function handleResponse () {
      const response = await getData()
      setCakes(response)
      setIsLoading(false)
    }

    handleResponse().catch(error => {
      console.log(error.response)
    })
  }, [isLoading])

  function renderCakesList (cakes) {
    return (
      <CakesContainer>
        {cakes.map(({ id, name, imageUrl, ...otherCakeProps }) => (
          <CakeCard
            key={id}
            name={name}
            imageUrl={imageUrl}
            {...otherCakeProps}
          />
        ))}
      </CakesContainer>
    )
  }

  function renderSpinner () {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    )
  }

  return (
    <Container>
      <h1>The Cake Store</h1>
      {isLoading ? renderSpinner() : renderCakesList(cakes)}
      <ButtomContainer to='/new'>
        <AddCakeButton />
      </ButtomContainer>
    </Container>
  )
}
