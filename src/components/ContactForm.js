import React from 'react'
import styled from 'styled-components';
import { ContactFormInput } from './ContactFormInput';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { device } from "../helpers/mediaQueries";

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
  padding: 13px 30px;
  background: #fff;
  color: #000;
  border-radius: 20px;
  outline: none;
  border: none;
`

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const tReq = 'Pole wymagane';
const tEmail = 'Nieprawidłowy adres email';
const tPhone = 'Nieprawidłowy numer telefonu';

const validationSchema = yup.object().shape({
  name: yup.string().required(tReq).max(25, 'Nie uwierzę że masz tak długie imie'),
  email: yup.string().required(tReq).email(tEmail),
  phone: yup.string().required(tReq).matches(phoneRegExp, tPhone),
  description: yup.string().required(tReq).max(1000)
})

export const ContactForm = () => {
  const onSubmit = data => console.log(data);

  return (
    <FormWrapper>
      <FormHeading>Gotowy?</FormHeading>
      <FormSubHeading>Napisz do nas</FormSubHeading>
      <Formik onSubmit={onSubmit} initialValues={{ name: '', email: '', phone: '', description: '' }} validateOnChange validationSchema={validationSchema}>
        {({ handleSubmit }) => (  
        <StyledForm onSubmit={handleSubmit}>
          <ContactFormInput name='name' label='Twoje imię' />
          <ContactFormInput name='email' label='Twój adres email' type='email' />
          <ContactFormInput name='phone' label='Twój numer telefonu' type='tel' />
          <ContactFormInput name='description' label='Twoja wiadomość' type='textarea' />
          <SendButton>Submit</SendButton>
        </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  )
}


