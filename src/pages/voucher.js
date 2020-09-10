import React from "react"
import styled from "styled-components"
import { Layout } from "../components/Layout";
import { graphql, useStaticQuery, navigate } from "gatsby"
import { device } from "../helpers/mediaQueries"
import Img from "gatsby-image"
import IconsBackground from "../images/voucher_tlo.png"
import Gift from "../images/VoucherIcons/gift.svg"
import Hands from "../images/VoucherIcons/hands.svg"
import Shipping from "../images/VoucherIcons/shipping.svg"
import "../styles/styles.css"
import Footer from "../components/footer"

const VoucherContainer = styled.div`
  position: relative;
  padding-bottom: 50px;
  margin-bottom: 5rem;
  display: flex;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0 4rem;
  }
`

const TextContainer = styled.div`
  padding: 0 4rem;

  @media screen and (max-width: 1300px) {
    padding: 0;
  }
`

const VoucherTextContainer = styled.div`
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`

const VoucherHeadline = styled.p`
  font-size: 100px;
  margin-bottom: 30px;
  letter-spacing: 15px;
`

const VoucherDescription = styled.p`
  font-size: 25px;
  line-height: 1.8;
`

const VoucherSubDescription = styled.p`
  font-family: "Exo 2", sans-serif;
  line-height: 1.8;

  @media (min-width: 1300px) and (max-width: 1500px) {
    font-size: 14px;
  }
`

const VoucherImgContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 1300px) {
    margin-top: 2rem;
    width: 100%;
  }
`

const CTAContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  padding: 50px 30px;
  flex-direction: column;
  box-shadow: 0px 10px 25px -10px #000;
  justify-content: center;
  align-items: center;
  bottom: 0;
  z-index: 5;
`

const CTATitle = styled.h2`
  width: 100%;
  color: #000;
  font-family: "Unica One", sans-serif;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 64px;
  font-weight: 400;
  text-align: center;
`

const CTAButton = styled.button`
  width: 70%;
  color: #000;
  font-family: "Unica One", sans-serif;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 18px;
  font-weight: 400;
  background: #fff;
  border: 1px solid #000;
  padding: 20px 8px;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.15s ease-out, color 0.15s ease-out;
  &:hover,
  &:focus {
    color: #fff;
    background: #000;
    outline: none;
  }
  @media ${device.laptop} {
    width: 70%;
  }
`

const HeaderImg = styled(Img)`
  width: 100%;
  height: auto;
`

const VoucherIcons = styled.div`
  position: absolute;
  bottom: 0;
  width: 55%;
  height: 250px;
  padding-right: 50px;
  background: url(${IconsBackground});
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 0;

  @media screen and (max-width: 700px) {
    display: none;
  }

  @media (min-width: 700px) and (max-width: 1300px) {
    position: relative;
    width: 100%;
    padding: 0;
  }

  @media (min-width: 1300px) and (max-width: 1500px) {
    height: 200px;
    bottom: -5rem;
  }
`

const VoucherPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { regex: "/Voucher.png/" }) {
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
      <Layout location={location}>
        <VoucherContainer>
          <VoucherTextContainer>
            <TextContainer>
              <VoucherHeadline>KUP VOUCHER</VoucherHeadline>
              <VoucherDescription>
                Na pewno ktoś z Twoich bliskich nosi się z zamiarem zrobienia
                tatuażu, potrzebuje tylko żeby ktoś go dobrze podpuścił! Taki
                prezent to temat, który będzie wracał przez lata, a kto wie,
                może okaże się że będzie tym najlepszym prezentem w życiu?
              </VoucherDescription>
              <VoucherSubDescription>
                Wouczer możesz wykupić na dowolną kwotę od 50zł w górę i jest
                ważny przez 4 miesiące od daty zakupu. Przygotujemy go dla
                Ciebie na miejscu w ciągu 5 minut, dostajesz od nas ramkę z
                wouczerem i torbę na prezent z wlepami, próbką kremu do gojenia
                tatuaży. Jeśli nie jest Ci do nas po drodze, możemy wysłać go
                pocztą lub mailem – napisz do nas, ustalimy czego Ci potrzeba!
                Odwiedź nas osobiście albo napisz wiadomość, nie bądź gapa, nie
                czekaj do ostatniej chwili!
              </VoucherSubDescription>
            </TextContainer>
            <VoucherIcons>
              <div>
                <img src={Gift} />
              </div>
              <div>
                <img src={Shipping} />
              </div>
              <div>
                <img src={Hands} />
              </div>
            </VoucherIcons>
          </VoucherTextContainer>
          <VoucherImgContainer>
            <HeaderImg fluid={data.hero.childImageSharp.fluid} />
            <CTAContainer>
              <CTATitle>CHCESZ kUPIĆ?</CTATitle>
              <CTAButton onClick={() => navigate("/contact")}>
                Skontaktuj się z nami
              </CTAButton>
            </CTAContainer>
          </VoucherImgContainer>
        </VoucherContainer>

        <Footer />
      </Layout>
    </>
  )
}

export default VoucherPage
