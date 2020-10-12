import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { API } from 'aws-amplify'

import { BackButton } from '../components/BackButton'
import { Spinner } from '../components/Spinner'

import { onError } from '../libs/errorLib'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 27vw;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`

const CakeContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  box-shadow: 1px 1px 1px #ccc;
  border-radius: 5px;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
`

const ImageContainer = styled.img`
  border-radius: 7px;
  padding: 5px;
  width: 15em;
  min-height: 15em;

  @media (max-width: 800px) {
    width: 97%;
  }
`

const Name = styled.p`
  font-weight: 500;
  font-size: 1.5em;
  margin: 0;
`

const Comment = styled.p`
  font-size: 1em;
  font-weight: 300;
`

const YumFactorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 10px;
`

const YumFactor = styled.p`
  font-size: 1em;
`

const Level = styled.p`
  font-weight: 300;
  font-size: 1em;
  margin: 0 10px;
  font-weight: 500;
`

export const CakeDetail = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [yumFactor, setYumFactor] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    function loadCake () {
      return API.get('cakes', `/cakes/${id}`)
    }

    async function onLoad () {
      try {
        const cake = await loadCake()
        const { name, comment, imageUrl, yumFactor } = cake

        setName(name)
        setComment(comment)
        setImageUrl(imageUrl)
        setYumFactor(yumFactor)
        setIsLoading(false)
      } catch (error) {
        onError(error)
      }
    }

    onLoad()
  }, [id])

  function renderCakeContainer () {
    return (
      <CakeContainer>
        <ImageContainer src={imageUrl} />
        <DetailContainer>
          <Name>{name}</Name>
          <Comment>{comment}</Comment>
          <YumFactorContainer>
            <YumFactor>Yum Factor:</YumFactor>
            <Level>{yumFactor}</Level>
          </YumFactorContainer>
        </DetailContainer>
      </CakeContainer>
    )
  }

  return (
    <Container>
      <h1>Cake Detail</h1>
      {isLoading ? Spinner() : renderCakeContainer()}
      <div>
      <BackButton to='/'>&#8592; Back</BackButton>
      </div>
    </Container>
  )
}
