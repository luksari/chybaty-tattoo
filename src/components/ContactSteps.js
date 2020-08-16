import React from 'react'
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { content } from '../data/contactSteps.json';
import { ContactStep } from './ContactStep';
import { device } from '../helpers/mediaQueries';
import { useStaticQuery } from 'gatsby';

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
    width: 60%;
    margin-left: 75px;
  }
`

const StepThree = styled(ContactStep)`
  align-self: flex-end;
  margin-left: auto;
  background: url(${({ bgImage }) => bgImage }) #000000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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
  margin-bottom: 72px;
  @media ${device.laptop} {
    width: 950px;
    margin-top: 45px;
  }
`

export const ContactSteps = () => {
  const data = useStaticQuery(textureImageQuery);

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
        bgImage={data.file.childImageSharp.fluid.src}
      />
      <StepFour
        index={4}
        title={stepFour.title}
        paragraph={stepFour.paragraph}
      />
    </StepsWrapper>
  )
}

const textureImageQuery = graphql`
  query textureQuery {
    file(relativePath: { eq: "contact/texture.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

