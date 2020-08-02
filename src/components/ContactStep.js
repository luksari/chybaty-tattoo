import React from 'react'
import styled from 'styled-components';
import { device } from '../helpers/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  padding: 35px;
  background: #000;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
  width: 100%;
  @media ${device.laptop} {
    margin-bottom: 0;
  }
`

export const StepIndex = styled.p`
  font-size: 144px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: #fff;
  -webkit-text-stroke-width: 1px;
  font-weight: 600;
  margin-bottom: 0;
  @media ${device.laptop} {
    margin-top: -144px;
  }
`

export const StepTitle = styled.p`
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 25px;
  letter-spacing: 0.5px;
  margin-bottom: 10px;

  @media ${device.laptop} {
    margin-bottom: 25px;
  }
`;

const StepParagraph = styled.p`
  font-size: 13px;
  line-height: 22px;
  color: #fff;
  width: 100%;
  font-family: 'Exo 2', sans-serif;
  letter-spacing: 0.4px;
  margin-bottom: 0;
  @media ${device.laptop} {
    font-size: 16px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  
`

export const ContactStep = ({ index, title, moreTitle, paragraph, className }) => {
  return (
    <Wrapper className={className}>
      <StepIndex>{index}</StepIndex>
      <TextWrapper>
        <StepTitle>{title}</StepTitle>
        {moreTitle && <StepTitle>{moreTitle}</StepTitle>}
        {paragraph && <StepParagraph>{paragraph}</StepParagraph>}
      </TextWrapper>
    </Wrapper>
  )
}
