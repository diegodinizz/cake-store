import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import { API } from 'aws-amplify'

import { BackButton } from '../components/BackButton'
import { Spinner } from '../components/Spinner'
import { CustomButton } from '../components/CustomButton'

import { onError } from '../libs/errorLib'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.size.length > 100 ? '44rem' : '32rem')};
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 80%;
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
  padding: 10px;
`

const ImageContainer = styled.img`
  border-radius: 7px;
  padding: 5px;
  width: 15rem;
  height: 15rem;

  @media (max-width: 800px) {
    width: 97%;
    height: 100%;
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
`

const YumFactor = styled.p`
  font-size: 1em;
  margin: 0;
`

const Level = styled.p`
  font-weight: 300;
  font-size: 1em;
  margin: 0 10px;
  font-weight: 500;
`

const ButtomContainer = styled.div`
  display: flex;
  margin-top: 20px;
  text-decoration: none;
  width: 30%;

  @media (max-width: 800px) {
    width: 60%;
    margin: 20px auto;
  }
`

export const CakeDetail = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [yumFactor, setYumFactor] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()
  const history = useHistory()

  function deleteCake () {
    return API.del('cakes', `/cakes/${id}`)
  }

  async function handleDelete (event) {
    event.preventDefault()

    const confirmed = window.confirm(
      'Are you sure you want to delete this cake?'
    )

    if (!confirmed) {
      return
    }

    try {
      await deleteCake()
      history.push('/')
    } catch (e) {
      onError(e)
    }
  }

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
    if (name === 'Chocolate' || name === 'Carrot') {
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
    } else {
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
            <ButtomContainer onClick={handleDelete}>
              <CustomButton>delete</CustomButton>
            </ButtomContainer>
          </DetailContainer>
        </CakeContainer>
      )
    }
  }

  return (
    <Container size={comment}>
      <h1>Cake Detail</h1>
      {isLoading ? Spinner() : renderCakeContainer()}
      <div>
        <BackButton to='/'>&#8592; Back</BackButton>
      </div>
    </Container>
  )
}
