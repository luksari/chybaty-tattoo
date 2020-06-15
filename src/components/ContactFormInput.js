import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
import { useField } from 'formik';
import { motion, useAnimation } from 'framer-motion';


const InputWrapper = styled.div`
  display: flex;
  position: relative;
  color: #ffffff;
  border-bottom: 1px solid #4f4f4f; 
  width: 100%;
  height: 45px;
  font-size: 18px;
  margin-bottom: 45px;
  font-weight: 200;
  font-family: 'Exo 2', sans-serif;
  cursor: text;
  ${({ isFine }) => isFine && css`
    ${InputLabel} {
      transform: translateY(-35px) translateX(-40px) scale(0.8);
    }
  `}
  ${({ hasError }) => hasError && css`
    border-color: #CD5C5C;
    ${InputLabel} {
      &::after {
        opacity: 1;
      }
    }
    ${StyledInput} {
      color: #CD5C5C;
    }
  `}
`

const InputLabel = styled(motion.label)`
  position: absolute;
  bottom: 5px;
  left: 30px;
  z-index: 1;
  width: auto;
  transition: transform 0.15s ease-out;
  cursor: text;
  &::after {
    opacity: 0;
    color: #CD5C5C;
    content: '*';
    margin-left: 5px;
    transition: opacity 0.3s ease-out;
  }
`

const StyledInput = styled(motion.input)`
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

const ErrorWrapper = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: -20px;
  color: #CD5C5C;
`

const errorVariants = {
  initial: { 
    x: 0
  },
  error: {
    x: [0, -10, 0, 10, 0] 
  }
}

export const ContactFormInput = ({ name, label, icon, type = 'text', validate }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [{ onBlur, ...field }, meta] = useField({ name });
  const isFine = field.value.length || isFocused;
  const hasError = meta.error;

  return (
    <InputWrapper isFine={isFine} hasError={hasError}>
      <span>{icon}</span>
      <StyledInput
        onBlur={(e) => {
          setIsFocused(false);
          onBlur(e);
        }}
        onFocus={() => setIsFocused(true)}
        id={name}
        name={name}
        type={type} 
        {...field}
        />
      <InputLabel 
        initial={hasError ? 'error' : 'initial'}
        animate={hasError ? 'error' : 'initial'}
        variants={errorVariants} 
        htmlFor={name}>{label}</InputLabel>
      <ErrorWrapper>{meta.touched && meta.error}</ErrorWrapper>
    </InputWrapper>
  )
};
