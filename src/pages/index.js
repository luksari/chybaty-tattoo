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
const IndexPage = () => (
  <>
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
    <Layout title="O nas">
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
    </Layout>
  </>
)

export default IndexPage
