import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Layout } from "../components/Layout";
import SEO from "../components/seo"
import Footer from "../components/footer"
import Project from "../images/FaqIcons/Projekt.svg"
import Before from "../images/FaqIcons/CoPrzed.svg"
import Heal from "../images/FaqIcons/Gojenie.svg"
import Other from "../images/FaqIcons/Inne.svg"
import Laser from "../images/FaqIcons/Laser.svg"
import Payment from "../images/FaqIcons/Platnosc.svg"
import Health from "../images/FaqIcons/Zdrowie.svg"
import Appointment from "../images/FaqIcons/Umowa.svg"
import ProjectActiv from "../images/FaqIcons/Projekt_activ.svg"
import BeforeActiv from "../images/FaqIcons/CoPrzed_activ.svg"
import HealActiv from "../images/FaqIcons/Gojenie_activ.svg"
import OtherActiv from "../images/FaqIcons/Inne_activ.svg"
import LaserActiv from "../images/FaqIcons/Laser_activ.svg"
import PaymentActiv from "../images/FaqIcons/Platnosc_activ.svg"
import HealthActiv from "../images/FaqIcons/Zdrowie_activ.svg"
import AppointmentActiv from "../images/FaqIcons/Umowa_activ.svg"
import Search from "../images/FaqIcons/Search.svg"
import FaqAnswersBackground from "../images/tlo.png"
import JSONData from "../data/faqQuestions.json"

import "../styles/styles.css"

const FaqContainer = styled.div`
  position: relative;
  padding-bottom: 50px;
  margin-bottom: 5rem;
`

const FaqCategoriesContainer = styled.div`
  padding: 0 9.5rem;
  display: flex;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0 4rem;
  }

`

const FaqCategorieTextContainer = styled.div`
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`

const FaqHeadline = styled.p`
  font-size: 100px;
  margin-bottom: 30px;
  letter-spacing: 15px;
`

const FaqDescription = styled.p`
  font-size: 25px;
  line-height: 1.8;
`

const FaqSubDescription = styled.p`
  font-family: "Exo 2", sans-serif;
  line-height: 1.8;
`

const FaqCategoriesOptions = styled.div`
  width: 50%;
  display: block;

  @media screen and (max-width: 1300px) {
    margin-top: 2rem;
    width: 100%;
  }
`

const FaqCategoriesItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
`

const FaqCategoriesItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  img {
    width: 120px;
    height: 120px;
    cursor: pointer;
  }
`

const FaqSearch = styled.input`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -25px;
  z-index: 1;
  display: block;
  color: white;
  border: 1px solid #707070;
  border-radius: 42px 42px 41px 42px;
  height: 53px;
  width: 80%;
  padding: 0 20px;
  background: #000000 url(${Search}) no-repeat;
  background-position: 98% 50%;
  background-size: 25px 25px;
  outline: none;
`

const FaqAnswersContainer = styled.div`
  background: url(${FaqAnswersBackground}) repeat;
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
  position: relative;
`

const FaqSearchItem = styled.div`
  color: white;
  padding: 0 ${props => props.paddingSize}%;
  margin-bottom: 75px;
`

const FaqSearchItemQuestion = styled.p`
  font-family: "Unica One", sans-serif;
  font-size: 20px;
  font-weight: bold;
`

const FaqSearchItemAnswer = styled.p`
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
`

const FaqPage = ({ location }) => {
  const [category, setCategory] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const handleChange = event => {
    if (event.target.value === "") {
      setSearchTerm(event.target.value.toLowerCase())
      return handleClean()
    }
    setCategory("Search")
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleClean = () => {
    setCategory("");
  }

  useEffect(() => {
    const results = JSONData.filter(item =>
      item.answer.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <>
      <SEO title="FAQ" />
      <Layout location={location}>
        <FaqContainer>
        <FaqCategoriesContainer>
          <FaqCategorieTextContainer>
            <FaqHeadline>FAQ</FaqHeadline>
            <FaqDescription>
              Tatuaż budzi wiele emocji, nasuwa wiele pytań, które najlepiej
              zadać w miejscu, które wybrałeś na swoje studio tatuażu – opinii i
              sposobów na gojenie jest tak wiele jak tatuażystów, ale jeśli masz
              się u nas dziarać, to najlepiej polegać na naszych
              doświadczeniach.
            </FaqDescription>
            <FaqSubDescription>
              Często w wiadomościach powtarzają się też te same pytania i obawy,
              dlatego zebraliśmy wszystko w jednym miejscu i odpowiedzieliśmy na
              nie tak, żeby każdy kto ma wątpliwości mógł je rozwiać jeszcze
              zanim do nas napisze. Jeśli nie poruszyliśmy tematu, który Cię
              nurtuje – nie bój się pytać, skorzystaj z naszego formularza
              kontaktowego.
            </FaqSubDescription>
          </FaqCategorieTextContainer>
          <FaqCategoriesOptions>
            <FaqCategoriesItemContainer>
              <FaqCategoriesItem onClick={() => setCategory("Project")}>
                <img src={category === "Project" ? ProjectActiv : Project} />
                <p>PROJEKT</p>
              </FaqCategoriesItem>
              <FaqCategoriesItem onClick={() => setCategory("Payment")}>
                <img src={category === "Payment" ? PaymentActiv : Payment} />
                <p>PŁATNOŚCI</p>
              </FaqCategoriesItem>
              <FaqCategoriesItem onClick={() => setCategory("Heal")}>
                <img src={category === "Heal" ? HealActiv : Heal} />
                <p>GOJENIE</p>
              </FaqCategoriesItem>
            </FaqCategoriesItemContainer>
            <FaqCategoriesItemContainer>
              <FaqCategoriesItem onClick={() => setCategory("Appointment")}>
                <img
                  src={
                    category === "Appointment" ? AppointmentActiv : Appointment
                  }
                />
                <p>JAK SIĘ UMÓWIĆ?</p>
              </FaqCategoriesItem>
              <FaqCategoriesItem onClick={() => setCategory("Laser")}>
                <img src={category === "Laser" ? LaserActiv : Laser} />
                <p>LASEROWE USUWANIE TATUAŻY</p>
              </FaqCategoriesItem>
              <FaqCategoriesItem onClick={() => setCategory("Before")}>
                <img src={category === "Before" ? BeforeActiv : Before} />
                <p>CO PRZED DZIARANIEM</p>
              </FaqCategoriesItem>
            </FaqCategoriesItemContainer>
            <FaqCategoriesItemContainer>
              <FaqCategoriesItem onClick={() => setCategory("Health")}>
                <img src={category === "Health" ? HealthActiv : Health} />
                <p>ZDROWIE</p>
              </FaqCategoriesItem>
              <FaqCategoriesItem onClick={() => setCategory("Other")}>
                <img src={category === "Other" ? OtherActiv : Other} />
                <p>INNE</p>
              </FaqCategoriesItem>
              <FaqCategoriesItem />
            </FaqCategoriesItemContainer>
          </FaqCategoriesOptions>
        </FaqCategoriesContainer>
        <FaqSearch
          placeholder="Nie wiesz do jakiej kategorii zajrzeć? w poszukiwaniu odpowiedzi wpisz słowo klucz wyszukiwarkę!"
          value={searchTerm}
          onChange={handleChange}
          onBlur={handleClean}
        />
        </FaqContainer>
        
        {category !== ""  ? (
          <FaqAnswersContainer>
            {category !== "Search"
              ? JSONData.filter(item => item.category === category).map(
                  item => {
                    const random = Math.floor(Math.random() * (25 - 5)) + 5
                    return (
                      <FaqSearchItem paddingSize={random}>
                        <FaqSearchItemQuestion>
                          {item.question.toUpperCase()}
                        </FaqSearchItemQuestion>
                        <FaqSearchItemAnswer>{item.answer}</FaqSearchItemAnswer>
                      </FaqSearchItem>
                    )
                  }
                )
              : searchResults.map(item => {
                  const random = Math.floor(Math.random() * (25 - 5)) + 5
                  return (
                    <FaqSearchItem paddingSize={random}>
                      <FaqSearchItemQuestion>
                        {item.question.toUpperCase()}
                      </FaqSearchItemQuestion>
                      <FaqSearchItemAnswer>{item.answer}</FaqSearchItemAnswer>
                    </FaqSearchItem>
                  )
                })}
          </FaqAnswersContainer>
        ) : null}
        <Footer />
      </Layout>
    </>
  )
}

export default FaqPage
