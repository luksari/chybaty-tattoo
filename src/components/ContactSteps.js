import React from 'react'
import styled from 'styled-components';
import { content } from '../content/contactSteps.json';
import { ContactStep } from './ContactStep';
import { device } from '../helpers/mediaQueries';

const StepsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  @media ${device.laptop} {
    padding: 0;
  }
`

const StepOne = styled(ContactStep)`
  margin-left: auto;
  align-self: flex-end;
  @media ${device.laptop} {
    width: 750px;
    margin-right: 45px;
    margin-top: -35px;
    margin-bottom: 45px;
  }
`

const StepTwo = styled(ContactStep)`
  align-self: flex-start;
  background: #1D1D1D;
  @media ${device.laptop} {
    width: 750px;
    margin-left: 75px;
  }
`

const StepThree = styled(ContactStep)`
  align-self: flex-end;
  margin-left: auto;
  background: #0e0e0e;
  @media ${device.laptop} {
    width: 950px;
    margin-right: 45px;
    height: 350px;
    margin-top: -45px;
  }
`

const StepFour = styled(ContactStep)`
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  @media ${device.laptop} {
    width: 950px;
    margin-top: 45px;
  }
`

export const ContactSteps = () => {
  const stepOne = content[0];
  const stepTwo = content[1];
  const stepThree = content[2];
  const stepFour = content[3];
  return (
    <StepsWrapper>
      <StepOne 
        index={1}
        title={stepOne.title}
        paragraph={stepOne.paragraph}
      />
      <StepTwo 
        index={2}
        title={stepTwo.title}
        moreTitle={stepTwo.moreTitle}
      />
      <StepThree 
        index={3}
        title={stepThree.title}
        paragraph={stepThree.paragraph}
      />
      <StepFour
        index={4}
        title={stepFour.title}
        paragraph={stepFour.paragraph}
      />
    </StepsWrapper>
  )
}
