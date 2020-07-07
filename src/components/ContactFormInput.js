import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { useField } from 'formik';
import { motion } from 'framer-motion';
import { device } from "../helpers/mediaQueries";


const InputWrapper = styled.div`
  display: flex;
  position: relative;
  color: #ffffff;
  border-bottom: 1px solid #4f4f4f; 
  width: 100%;
  height: 45px;

  font-size: 14px;
  margin-bottom: 65px;
  font-weight: 200;
  font-family: 'Exo 2', sans-serif;
  cursor: text;
  ${({ isFine }) => isFine && css`
    ${InputLabel} {
      transform: translateY(-35px) translateX(-40px) scale(0.8);
    }
  `}
  ${({ isTextarea }) => isTextarea && css`
    border: 1px solid #4f4f4f;
    height: 180px;
    border-radius: 8px;
    margin-bottom: 15px;
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
  cursor: text;
  font-size: 13px;
  top: 20px;
  &::after {
    opacity: 0;
    color: #CD5C5C;
    content: '*';
    margin-left: 5px;
    transition: opacity 0.3s ease-out;
  }
  @media ${device.laptop} {
    flex-direction: row;
    padding: 0;
    font-size: 16px;
  }
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
  position: absolute;
  width: calc(100% - 30px);
`

const StyledTextarea = styled.textarea.attrs({ rows: 8 })`
  background: none;
  color: #ffffff;
  bottom: 0;
  left: 0;
  height: 100%;
  outline: none;
  overflow-y: auto;
  border: none;
  width: 100%;
  resize: none;
  position: absolute;
  padding: 8px;
`

const ErrorWrapper = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: -20px;
  color: #CD5C5C;
`

const errorVariants = {
  initial: { 
    x: -35,
    y: -45
  },
  error: {
    x: [-45, -35, -25, -35],
    y: -45
  }
}

export const ContactFormInput = ({ name, label, icon, type = 'text', validate }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [{ onBlur, ...field }, meta] = useField({ name });
  const isFine = field.value.length || isFocused;
  const hasError = meta.error;
  const Component = type === 'textarea' ? StyledTextarea : StyledInput;

    return (
    <InputWrapper isFine={isFine} hasError={hasError} isTextarea={type === 'textarea'}>
      <span>{icon}</span>
      <Component
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
