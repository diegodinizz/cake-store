import React from 'react'
import styled, { css } from 'styled-components'

const subColor = 'grey'
const mainColor = 'black'

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`

const Container = styled.div`
  position: relative;
  margin: 45px 0;
`

const InputContainer = styled.input`
  background-color: #f6f6f6;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 0 0 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`

const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`

export const FormInput = ({ handleChange, label, ...props }) => (
  <Container>
    <InputContainer onChange={handleChange} {...props} />
    {label ? (
      <Label className={props.value.length ? 'shrink' : ''}>{label}</Label>
    ) : null}
  </Container>
)
