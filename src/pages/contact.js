import React from 'react'
import SEO from "../components/seo"
import { Layout } from "../components/Layout"
import { useStaticQuery } from "gatsby"
import Image from 'gatsby-image';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-top: 75px;
  display: flex;
  padding: 0 75px;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`

const MainImage = styled(Image)`
  width: 75%;
`

const Headline = styled.h1`
  font-size: 128px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Unica one', sans-serif;
  letter-spacing: 31px;
  font-weight: 400;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 75px;
  bottom: 75px;
  z-index: 1;
`

const MainParagraph = styled.p`
  color: #fff;
  letter-spacing: 0.5px; 
  text-transform: uppercase;
  font-size: 20px;
  width: 55%;
  line-height: 40px;
`

const ContactPage = () => {
  const data = useStaticQuery(contactImageQuery);
  return (
    <>
      <SEO title="Kontakt" />
      <Layout>
        <MainWrapper>
          <TextWrapper>
            <Headline>Kontakt</Headline>
            <MainParagraph>Dobrze napisana wiadomość uprości nasz kontakt, co jest dla nas istotne</MainParagraph>
          </TextWrapper>
          <MainImage fluid={data.file.childImageSharp.fluid}/>
        </MainWrapper>
      </Layout>
    </>
  )
}

const contactImageQuery = graphql`
  query contactImageQuery {
    file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage;
