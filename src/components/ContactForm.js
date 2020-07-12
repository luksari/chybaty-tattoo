import React, { useState } from 'react';

import styled from 'styled-components';
import axios from 'axios';
import { ContactFormInput } from './ContactFormInput';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { device } from "../helpers/mediaQueries";
import { isEmpty } from 'lodash';

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
  margin-bottom: 35px;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media ${device.laptop} {
    width: 30%;
  }
  
`

const SendButton = styled.button`
  padding: 8px 30px;
  margin-left: auto;
  background: #fff;
  font-size: 13px;
  font-weight: 700;
  color: #000;
  border-radius: 20px;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const tReq = 'Pole wymagane';
const tEmail = 'Nieprawidłowy adres email';
const tPhone = 'Nieprawidłowy numer telefonu';

const validationSchema = yup.object().shape({
  name: yup.string().required(tReq).max(25, 'Nie uwierzę że masz tak długie imie'),
  _replyTo: yup.string().required(tReq).email(tEmail),
  phone: yup.string().required(tReq).matches(phoneRegExp, tPhone),
  description: yup.string().required(tReq).max(1000)
})

export const ContactForm = () => {
  const [serverState, setServerState] = useState();

  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: "https://formspree.io/moqkkqjp",
      data: values
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Wiadomość została wysłana!");
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response);
      });
  };

  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };

  return (
    <FormWrapper>
      <FormHeading>Gotowy?</FormHeading>
      <FormSubHeading>Napisz do nas</FormSubHeading>
      <Formik 
        onSubmit={handleOnSubmit} 
        initialValues={{ name: '', _replyTo: '', phone: '', description: '' }} 
        validateOnChange 
        validationSchema={validationSchema}>
        {({ handleSubmit, isSubmitting, errors }) => (  
        <StyledForm 
          action={`https://formspree.io/${process.env.GATSBY_FORMSPREE_API_KEY}`}
          onSubmit={handleSubmit}
          method="POST"
        >
          <ContactFormInput name='name' label='Twoje imię' />
          <ContactFormInput name='_replyTo' label='Twój adres email' type='email' />
          <ContactFormInput name='phone' label='Twój numer telefonu' type='tel' />
          <ContactFormInput name='description' label='Twoja wiadomość' type='textarea' />
          <SendButton type='submit' disabled={isSubmitting || !isEmpty(errors)}>Wyślij</SendButton>
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
        </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  )
}


