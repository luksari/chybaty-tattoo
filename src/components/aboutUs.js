import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const AboutUsContainer = styled.div`
  display: flex;
  height: 600px;
`

const AboutUsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  align-items: center;
  padding: 75px;
  background-color: black;

  h1 {
    font-family: "Unica One", cursive;
    font-size: 55px;
    letter-spacing: 10px;
    font-weight: bold;
    align-self: flex-start;
    color: white;
  }

  button {
    background: none;
    border: none;
    color: white;
    padding-bottom: 10px;
    font-size: 20px;
    align-self: flex-end;   
  }

  span {
    width: 100%;
    height: 5px;
    background-color: #303030;
    margin-bottom: 15px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 50%;
      /* right: ${({ clickMore }) => (clickMore ? "0" : "-100")}; */
      transform: ${({  clickMore }) => clickMore ? `translateX(100%)` : `translateX(0)`};
      height: 4px;
      background-color: #707070;
      transition: transform .2s ease-in-out;
    }
  }

  p {
    font-family: "Unica One", cursive;
    font-size: 20px;
    color: white;
    line-height: 2;
  }
`

const AboutUs = () => {
  const [isClick, setIsClick] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ekipa-chybatytattoo.png" }) {
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
      <AboutUsItem clickMore={isClick}>
        <h1>O NAS</h1>
        <button onClick={() => setIsClick(!isClick)}>
          {isClick ? "MNIEJ" : "WIĘCEJ"}
        </button>
        <span/>
        {!isClick ? (
          <p>
            Chyba Ty Tattoo, to miejsce w którym zajmiemy się Twoim tatuażem,
            zaczynając od rozmowy, po stworzenie projektu i wykonanie wzoru na
            ciele, poza tym miło spędzisz z nami czas, poznasz ciekawych ludzi,
            dużo się u nas dzieje!
          </p>
        ) : (
          <p style={{ fontSize: "16px" }}>
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
          </p>
        )}
      </AboutUsItem>
      <Img fluid={data.file.childImageSharp.fluid} style={{ flex: "1" }} />
    </AboutUsContainer>
  )
}

export default AboutUs
