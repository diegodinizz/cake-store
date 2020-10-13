import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { API } from 'aws-amplify'

import { CustomButton } from '../components/CustomButton'
import { FormInput } from '../components/FormInput'
import { BackButton } from '../components/BackButton'

import { onError } from '../libs/errorLib'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 27vw;

  @media (max-width: 800px) {
    width: 80%;
  }
`

const CommentLabel = styled.label`
  display: block;
  color: grey;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`

const CommentContainer = styled.textarea`
  padding: 10px;
  line-height: 1.5;
  border: 1px solid grey;
  box-shadow: 1px 1px 1px #999;
  resize: none;
  width: 27vw;
  height: 150px;
  font-size: 18px;
  color: grey;

  @media (max-width: 800px) {
    width: 98%;
  }

  &:focus {
    outline-color: grey;
  }
`

const YumLabel = styled(CommentLabel)`
  margin: 25px 0 10px 0;
`

const YumContainer = styled.select`
  border: 1px solid grey;
  width: auto;
  height: 1.5rem;

  &:focus {
    outline-color: grey;
  }
`

const ButtomContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;

  @media (max-width: 800px) {
    width: 80%;
    margin-top: 60px;
  }
`

export const NewCake = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const imageUrl = 'https://i.ibb.co/wdnsWYt/cake-image.png'
  const [yumFactor, setYumFactor] = useState(undefined)
  const [nameList, setNameList] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function onLoad () {
      try {
        const response = await API.get('cakes', '/cakes')
        response.map(item => setNameList(item.name))
      } catch (error) {
        onError(error)
      }
    }

    onLoad()
  }, [])

  async function handleSubmit (event) {
    event.preventDefault()

    function createCake () {
      const apiName = 'cakes'
      const path = '/cakes'
      const myCake = {
        body: { name, comment, imageUrl, yumFactor }
      }

      return API.post(apiName, path, myCake)
    }

    if (nameList.includes(name)) {
      alert(`${name} already exists!`)
      setName('')
      return
    }
    if (comment.length < 5 || comment.length > 200) {
      alert('Comment must be between 5 and 200 words!')
      return
    }
    if (yumFactor === undefined) {
      alert('You must select a yum factor between 1 and 5')
      return
    } else {
      try {
        await createCake()
        history.push('/')
      } catch (error) {
        onError(error)
      }
    }
  }

  return (
    <Container>
      <h1>Add New Cake</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='name'
          value={name}
          onChange={event => setName(event.target.value)}
          label='Name'
          required
        />
        <CommentLabel>Comment</CommentLabel>
        <CommentContainer
          name='comment'
          value={comment}
          onChange={event => setComment(event.target.value)}
          minLength='5'
          maxLength='200'
          required
        />
        <YumLabel>Yum Factor</YumLabel>
        <YumContainer
          name='yumFactor'
          value={yumFactor}
          onChange={event => setYumFactor(event.target.value)}
        >
          <option value=''>Select a yummy factor</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </YumContainer>
        <ButtomContainer>
          <CustomButton type='submit'>submit</CustomButton>
        </ButtomContainer>
      </form>
      <div>
        <BackButton to='/'>&#8592; Back</BackButton>
      </div>
    </Container>
  )
}
