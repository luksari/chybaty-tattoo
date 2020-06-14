import React, { useState, useCallback } from 'react'
import styled from 'styled-components';
import { ContactFormInput } from './ContactFormInput';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #1d1d1d;
  color: #ffffff;
  padding: 45px;
`

const FormHeading = styled.h2`
  font-size: 85px;
  font-family: 'Unica one', sans-serif;
  text-transform: uppercase;
`

const FormSubHeading = styled.h3`
  font-size: 26px;
  font-family: 'Unica one', sans-serif;
  text-transform: uppercase;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = useCallback((event) => {
    setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }, [])
  
  return (
    <FormWrapper>
      <FormHeading>Gotowy?</FormHeading>
      <FormSubHeading>Napisz do nas</FormSubHeading>
      <StyledForm>
        <ContactFormInput name='name' label='Twoje imię'/>
        <ContactFormInput name='email' label='Twój adres email' />
        <ContactFormInput name='phone' label='Twój numer telefonu' />
        <ContactFormInput name='description' label='Twoja wiadomość' type='textarea'/>
        <div>
          <label htmlFor="file">Dodaj załącznik</label>
          <input id="file" name="file" type="file" />
        </div>
      </StyledForm>
    </FormWrapper>
  )
}


