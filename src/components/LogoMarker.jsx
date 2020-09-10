import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.inline.svg';

const Wrapper = styled.div`
  background: #000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 5px; 
`

const StyledLogo = styled(Logo)`
  width: auto;
  height: 100%;
`

export const LogoMarker = () => {
  return (
    <Wrapper>
      <StyledLogo />
    </Wrapper>
  )
}