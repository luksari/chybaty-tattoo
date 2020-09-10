import React from "react"
import styled from "styled-components"
import GoogleMapReact from "google-map-react"
import { Helmet } from "react-helmet"


import HeaderHome from "../components/headerHome"
import AboutUs from "../components/aboutUs"
import TestimonialCarousel from "../components/testimonialCarousel"
import { Layout } from '../components/Layout';
import { Artists } from '../components/Artists';

import "../styles/styles.css"

const GoogleMapContainer = styled.div`
  height: 700px;
`
const IndexPage = ({ location }) => {
  return (
    <>
      <Helmet>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css" />
      </Helmet>
      <Layout title="O nas" location={location}>
        <HeaderHome />
        <AboutUs />
        <TestimonialCarousel />
        <Artists />
        <GoogleMapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33,
            }}
            defaultZoom={11}
          ></GoogleMapReact>
        </GoogleMapContainer>
      </Layout>
    </>
  )
}

export default IndexPage
