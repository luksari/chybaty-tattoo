import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

const FooterWrapper = styled.footer`
  display: flex;
  background-color: black;
  padding: 50px 0;
`
const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.displeyColumn ? "column" : "row")};
  flex: 1;
`
const FooterTextContainer = styled.div`
  display: ${props => (props.displeyBlock ? "block" : "flex")};
  flex-direction: ${props => (props.displeyColumn ? "column" : "row")};
  margin-bottom: 10px;
`
const FooterTextContainerCenter = styled(FooterTextContainer)`
  align-items: center;
`
const FooterText = styled.p`
  color: white;
  font-family: "Exo 2", sans-serif;
  padding-left: 10px;
  margin: 0;
  margin-bottom: ${props => (props.marginBottom ? "10px" : "0")};
`
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem>
        <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
        <FooterTextContainer displeyColumn>
          <FooterText marginBottom>ul. Słowackiego 51/9c</FooterText>
          <FooterText>Katowice 40-093</FooterText>
        </FooterTextContainer>
      </FooterItem>
      <FooterItem>
        <FooterTextContainer displeyBlock>
          <FooterTextContainerCenter>
            <FontAwesomeIcon icon={faPhoneAlt} color="white" />
            <FooterText>tel. 737 801 745</FooterText>
          </FooterTextContainerCenter>
          <FooterTextContainerCenter>
            <FontAwesomeIcon icon={faEnvelope} color="white" />
            <FooterText>chybatytattoo@gmail.com</FooterText>
          </FooterTextContainerCenter>
        </FooterTextContainer>
      </FooterItem>
      <FooterItem>
        <FooterTextContainer displeyBlock>
          <FooterTextContainerCenter>
            <FontAwesomeIcon icon={faInstagram} color="white" />
            <FooterText>instagram.com/chybatytattoo</FooterText>
          </FooterTextContainerCenter>
          <FooterTextContainerCenter>
            <FontAwesomeIcon icon={faFacebookSquare} color="white" />
            <FooterText>facebook.com/chybatytattoo</FooterText>
          </FooterTextContainerCenter>
        </FooterTextContainer>
      </FooterItem>
      <FooterItem>
        <FontAwesomeIcon icon={faClock} color="white" />
        <FooterTextContainer displeyColumn>
          <FooterText marginBottom>Godziny otwarcia</FooterText>
          <FooterText>poniedziałek-piątek 10:00-18:00</FooterText>
        </FooterTextContainer>
      </FooterItem>
    </FooterWrapper>
  )
}

export default Footer