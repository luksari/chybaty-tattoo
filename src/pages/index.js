import React from "react"
import styled from "styled-components"
import GoogleMapReact from "google-map-react"
import { Helmet } from "react-helmet"

import SEO from "../components/seo"
import HeaderHome from "../components/headerHome"
import Footer from "../components/footer"
import AboutUs from "../components/aboutUs"
import Artists from "../components/artists"
import TestimonialCarousel from "../components/testimonialCarousel"

import "../styles/styles.css"

const GoogleMapContainer = styled.div`
  height: 700px;
`
const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>
    <HeaderHome />
    <AboutUs />
    <TestimonialCarousel />
    <Artists />
    <GoogleMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </GoogleMapContainer>
    <Footer />
  </React.Fragment>
)

export default IndexPage
