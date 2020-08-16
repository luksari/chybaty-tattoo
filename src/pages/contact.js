import React from 'react'
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import styled from 'styled-components';
import { ContactSteps } from '../components/ContactSteps';
import { ContactForm } from '../components/ContactForm';
import { device } from '../helpers/mediaQueries';

const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 25px;
  @media ${device.tablet} {
    padding: 0 75px;
  }
`

const MainImage = styled(Image)`
  width: 100%;
  height: 50vh;
  @media ${device.tablet} {
    width: 100%;
    height: 80vh;
  }
  @media ${device.laptop} {
    width: 75%;
  }
`

const Headline = styled.h1`
  text-transform: uppercase;
  color: #fff;
  font-family: 'Unica one', sans-serif;
  font-weight: 400;
  font-size: 72px;
  @media ${device.tablet} {
    letter-spacing: 26px; 
    font-size: 100px;
  }
  @media ${device.laptop} {
    letter-spacing: 31px; 
    font-size: 128px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 50%;
  transform: translateY(50%);
  align-items: center;
  width: 100%;
  background: #000000cc;
  padding: 20px;
  @media ${device.laptop} {
    background: none;
    width: 55%;
    align-items: flex-start;
    left: 75px;
    transform: translateY(0);
    bottom: 75px;
  }
`

const MainParagraph = styled.p`
  color: #fff;
  letter-spacing: 0.5px; 
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 20px;
    width: 55%;
    line-height: 40px;
  }
`

const ContactPage = () => {
  const data = useStaticQuery(contactImageQuery);
  return (
    <>
      <Layout title="Kontakt">
        <MainWrapper>
          <TextWrapper>
            <Headline>Kontakt</Headline>
            <MainParagraph>Dobrze napisana wiadomość uprości nasz kontakt, co jest dla nas istotne</MainParagraph>
          </TextWrapper>
          <MainImage fluid={data.file.childImageSharp.fluid} />
        </MainWrapper>
        <ContactSteps />
        <ContactForm />
      </Layout>
    </>
  )
}

const contactImageQuery = graphql`
  query contactImageQuery {
    file(relativePath: { eq: "contact/main.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage;
