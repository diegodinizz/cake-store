import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { CustomButton } from '../components/CustomButton'
import { FormInput } from '../components/FormInput'
import { BackButton } from '../components/BackButton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 27vw;
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
  /* border-radius: 5px; */
  border: 1px solid grey;
  box-shadow: 1px 1px 1px #999;
  /* letter-spacing: 0.8px; */
  /* border-bottom: 1px solid grey; */
  resize: none;
  width: 27vw;
  height: 150px;
  /* margin-top: 10px; */
  font-size: 18px;
  color: grey;

  &:focus {
    outline-color: grey;
  }

  textarea:invalid {
    border: 2px dashed red;
  }
`

const YumLabel = styled(CommentLabel)`
  margin: 25px 0 10px 0;
`

const YumContainer = styled.select`
  border: 1px solid grey;
  width: 2rem;
  width: 3rem;
  height: 1.5rem;

  &:focus {
    outline-color: grey;
  }
`

const ButtomContainer = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
`

export const NewCake = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [yumFactor, setYumFactor] = useState('')

  async function handleSubmit (event) {
    event.preventDefault()
  }

  // function handleChange (event) {
  //   // setName(event.target.value)

  //   const { name, value } = event.target

  //   if (name === 'name') {
  //     setName(value)
  //   }
  //   if (name === 'comment') {
  //     setComment(value)
  //   }
  // }

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
          maxLength='250'
          required
        />
        <YumLabel>Yum Factor</YumLabel>
        <YumContainer
          name='yumFactor'
          value={yumFactor}
          onChange={event => setYumFactor(event.target.value)}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </YumContainer>
        <ButtomContainer to='/'>
          <CustomButton type='submit'>submit</CustomButton>
        </ButtomContainer>
      </form>
      <BackButton to='/'>&#8592; Back</BackButton>
    </Container>
  )
}
