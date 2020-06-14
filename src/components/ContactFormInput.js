import React, { useMemo } from 'react'
import styled, { css } from 'styled-components';
import { useFormContext } from 'react-hook-form';


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
  ${({ isFine }) => isFine && css`
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

// export const ContactFormInput = (props) => {
//   const context = useFormContext();

//   return <ContactFormInputComponent {...props} {...context} />
// }

export const ContactFormInput = ({ name, label, icon, type = 'text' }) => {
  const { register, errors, watch } = useFormContext();
  const value = watch(name);
  const isFine = value && value.length;

  return (
    <InputWrapper isFine={isFine}>
      <span>{JSON.stringify(errors[name])}</span>
      <StyledInput id={name} name={name} type={type} ref={register}/>
      <InputLabel htmlFor={name}>{label}</InputLabel>
    </InputWrapper>
  )
};
