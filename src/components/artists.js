import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import CrewSVG from "../images/Ekipa.svg"

const ArtistBaseContainer = styled.div`
  position: relative;
  display: flex;
`

const ArtistNormalContainer = styled(ArtistBaseContainer)`
  height: 550px;
`

const ArtistContainerHigher = styled(ArtistBaseContainer)`
  height: 750px;
`

const ArtistNameBase = styled.div`
  position: absolute;
  height: 30px;
  background-color: #4f4f4f;
`

const LuleoneNameContainer = styled(ArtistNameBase)`
  bottom: 0;
  width: 200px;
`

const KolankoNameContainer = styled(ArtistNameBase)`
  bottom: 0;
  right: 0;
  width: 200px;
`

const LapiLopiNameContainer = styled(ArtistNameBase)`
  left: 0;
  top: 50%;
  width: 230px;
`

const JaroniNameContainer = styled(ArtistNameBase)`
  top: 0;
  right: 0;
  width: 180px;
`

const ArtistName = styled.p`
  text-align: center;
  font-size: 36px;
  letter-spacing: 8px;
  top: -20px;
  position: relative;
  color: white;
  margin: 0;
`

const ContactCTAContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

const ContactCTAHeader = styled.p`
  letter-spacing: 14px;
  padding-left: 14px;
  font-size: 70px;
  font-family: "Unica One", cursive;
  margin-bottom: 33px;
`

const ContactCTABtn = styled.button`
  color: white;
  font-size: 14px;
  letter-spacing: 3px;
  padding: 15px 45px;
  border: 1px solid #ffffff;
  border-radius: 51px;
  background-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;

  :hover {
    color: black;
    background-color: white;
  }
`

export const Artists = () => {
  const data = useStaticQuery(graphql`
    query {
      luleoneHome: file(relativePath: { eq: "luleone-home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kolankoHome: file(relativePath: { eq: "kolanko-home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lapiLopiHome: file(relativePath: { eq: "łapi-łopi-home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jaroniHome: file(relativePath: { eq: "jaroni.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <ArtistNormalContainer>
        <Img
          fluid={data.luleoneHome.childImageSharp.fluid}
          style={{ flex: "1" }}
        />
        <div style={{ flex: "2" }}>
          <img src={CrewSVG} />
          <LuleoneNameContainer>
            <ArtistName>LULEONE</ArtistName>
          </LuleoneNameContainer>
        </div>
      </ArtistNormalContainer>
      <ArtistNormalContainer>
        <div style={{ flex: "1", position: "relative" }}>
          <KolankoNameContainer>
            <ArtistName>Kolanko</ArtistName>
          </KolankoNameContainer>
        </div>
        <Img
          fluid={data.kolankoHome.childImageSharp.fluid}
          style={{ flex: "2" }}
        />
      </ArtistNormalContainer>
      <ArtistNormalContainer>
        <Img
          fluid={data.lapiLopiHome.childImageSharp.fluid}
          style={{ flex: "2", marginLeft: "70px" }}
        />
        <div style={{ flex: "1", position: "relative" }}>
          <LapiLopiNameContainer>
            <ArtistName>ŁAPI ŁOPI</ArtistName>
          </LapiLopiNameContainer>
        </div>
      </ArtistNormalContainer>
      <ArtistContainerHigher>
        <div style={{ flex: "1", position: "relative" }}>
          <Img fluid={data.jaroniHome.childImageSharp.fluid} />
          <JaroniNameContainer>
            <ArtistName>JARONI</ArtistName>
          </JaroniNameContainer>
        </div>
        <ContactCTAContainer>
          <ContactCTAHeader>KONTAKT</ContactCTAHeader>
          <p>Lorem ipsum</p>
          <p>dolor sit amet auwktaiurm</p>
          <ContactCTABtn>DOWIEDZ SIĘ WIĘCEJ</ContactCTABtn>
        </ContactCTAContainer>
      </ArtistContainerHigher>
    </>
  )
}

export default Artists
