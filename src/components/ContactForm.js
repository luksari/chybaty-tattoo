import React from 'react'
import styled from 'styled-components';
import { ContactFormInput } from './ContactFormInput';
import { useForm, FormContext } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';


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

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const tReq = 'Pole wymagane';
const tEmail = 'Nieprawidłowy adres email';
const tPhone = 'Nieprawidłowy numer telefonu';

const validationSchema = yup.object().shape({
  name: yup.string().required(tReq).max(25, 'Nie uwierzę że masz tak długie imie'),
  email: yup.string().required(tReq).email(tEmail),
  phone: yup.string().matches(phoneRegExp, tPhone),
  description: yup.string().required(tReq).max(1000)
})

export const ContactForm = () => {
  const methods = useForm({ mode: 'onChange'});
  const onSubmit = data => console.log(data);
  return (
    <FormWrapper>
      <FormHeading>Gotowy?</FormHeading>
      <FormSubHeading>Napisz do nas</FormSubHeading>
      <FormContext {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          <ContactFormInput name='name' label='Twoje imię' register={methods.register} />
          <ContactFormInput name='email' label='Twój adres email' register={methods.register} />
          <ContactFormInput name='phone' label='Twój numer telefonu' type='tel' register={methods.register} />
          <ContactFormInput name='description' label='Twoja wiadomość' type='textarea' register={methods.register} />
          <div>
            <label htmlFor="file">Dodaj załącznik</label>
            <input id="file" name="file" type="file" />
          </div>
          <button>Submit</button>
        </StyledForm>
      </FormContext>
    </FormWrapper>
  )
}


