import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby";
import { device } from '../helpers/mediaQueries.js';
import Img from "gatsby-image"

const AboutUsContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  @media ${device.laptop} {
    flex-direction: row;
  }
`
const ExpandButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding-bottom: 10px;
  font-size: 20px;
  align-self: flex-end;  
  cursor: pointer; 
`

const AboutUsTitle = styled.h1`
  font-size: 55px;
  letter-spacing: 10px;
  font-weight: 500;
  margin: 0;
  align-self: flex-start;
  color: white;
  text-transform: uppercase;
  width: 100%;
`
const Description = styled.p`
  font-size: 20px;
  color: white;
  line-height: 2;
  font-family: 'Unica One', sans-serif;
`

const AltDescription = styled(Description)`
  font-size: 17px;
  font-family: 'Exo 2', sans-serif;
`


const DescriptionTabs = styled.span`
  width: 100%;
  height: 5px;
  background-color: #303030;
  margin-bottom: 15px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    transform: ${({  clickMore }) => clickMore ? `translateX(100%)` : `translateX(0)`};
    height: 4px;
    background-color: #707070;
    transition: transform .2s ease-in-out;
  }
`;

const AboutUsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px;
  background-color: black;
  width: 100%;
  height: 100%;
  @media ${device.laptop} {
    width: 45%;
  }
`

const StyledImg = styled(Img)`
  width: 100%;
  height: 600px;
`

const AboutUs = () => {
  const [isMore, setIsMore] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      descMain: file(relativePath: { regex: "/desc_1/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AboutUsContainer>
      <AboutUsItem clickMore={isMore}>
        <AboutUsTitle>O NAS</AboutUsTitle>
        <ExpandButton onClick={() => setIsMore(!isMore)}>
          {isMore ? "MNIEJ" : "WIĘCEJ"}
        </ExpandButton>
        <DescriptionTabs clickMore={isMore}/>
        {!isMore ? (
          <Description>
            Chyba Ty Tattoo, to miejsce w którym zajmiemy się Twoim tatuażem,
            zaczynając od rozmowy, po stworzenie projektu i wykonanie wzoru na
            ciele, poza tym miło spędzisz z nami czas, poznasz ciekawych ludzi,
            dużo się u nas dzieje!
          </Description>
        ) : (
          <AltDescription>
            Tatuaż to często wiele stresu, a dla niektórych jedno z bardziej
            ekstremalnych przeżyć. Wiemy ile wątpliwości pojawia się przy
            wyborze odpowiedniego wzoru i miejsca na ciele. Co będzie dobrze
            wyglądać? Kto dobrze wykona Twój wymarzony tatuaż? Jaki rozmiar jest
            odpowiedni, żeby tatuaż długo dobrze wyglądał? Jesteśmy tu po to,
            żeby Ci doradzić, nam też zależy na tym, żeby Twoja dziarka dobrze
            prezentowała się przez lata! To w studiu spędzamy większość swojego
            czasu. Tutaj pracujemy, rozwijamy swoje zajawki, tworzymy, jemy
            wspólnie obiady, rozmawiamy, świętujemy. Dla nas to drugi dom i
            chcielibyśmy, żebyście i Wy czuli się tu swobodnie. Przyjdź, zobacz
            jak pracujemy i daj się wydziarać!
          </AltDescription>
        )}
      </AboutUsItem>
      <StyledImg fluid={data.descMain.childImageSharp.fluid} style={{ flex: "1", overflow: 'visible' }} />
    </AboutUsContainer>
  )
}

export default AboutUs
