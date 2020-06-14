import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  color: #ffffff;
  border-bottom: 1px solid #4f4f4f; 
  width: 100%;
  height: 45px;
  font-size: 18px;
  margin-bottom: 35px;
  font-weight: 200;
  font-family: 'Exo 2', sans-serif;
  cursor: text;
  ${({ isActive }) => isActive && css`
    ${InputLabel} {
      transform:translateY(-35px) translateX(-40px) scale(0.8);
      border-color: #ffffff;
    }
  `}
`

const InputLabel = styled.label`
  position: absolute;
  bottom: 5px;
  left: 30px;
  z-index: 1;
  width: auto;
  transition: transform 0.15s ease-out;
  cursor: text;
`

const StyledInput = styled.input`
  background: none;
  color: #ffffff;
  bottom: 0;
  left: 30px;
  height: 100%;
  outline: none;
  overflow-y: hidden;
  border: none;
  width: 100%;
  position: absolute;
`

export const ContactFormInput = ({ name, label, icon, type = 'text' }) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState()
  /** @TODO proper validation of value */
  const isInputActive = isFocused || (ref.current && ref.current.value.length > 0)

  return (
    <InputWrapper isActive={isInputActive}>
      <span></span>
      <StyledInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} id={name} name={name} type={type} ref={ref} />
      <InputLabel htmlFor={name}>{label}</InputLabel>
    </InputWrapper>
  )
}
