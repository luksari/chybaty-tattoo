import React from "react"
import styled from "styled-components"
import GoogleMapReact from "google-map-react"
import { Helmet } from "react-helmet"
import HeaderHome from "../components/headerHome"
import AboutUs from "../components/aboutUs"
import TestimonialCarousel from "../components/testimonialCarousel"
import { Layout } from "../components/Layout"
import { Artists } from "../components/Artists"
import { LogoMarker } from "../components/LogoMarker"
import googleMapStyles from "../helpers/googleMapStyles"

import "../styles/styles.css"

const GoogleMapContainer = styled.div`
  height: 700px;
`
const IndexPage = ({ location }) => {
  const mapOptions = {
    styles: googleMapStyles
  }

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css"
        />
      </Helmet>
      <Layout title="O nas" location={location}>
        <HeaderHome />
        <AboutUs />
        <TestimonialCarousel />
        <Artists />
        <GoogleMapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_API_KEY }}
            defaultCenter={{
              lat: 50.258253,
              lng: 19.01462,
            }}
            options={mapOptions}
            defaultZoom={15}
          >
            <LogoMarker lat={50.258253} lng={19.01462} />
          </GoogleMapReact>
        </GoogleMapContainer>
      </Layout>
    </>
  )
}

export default IndexPage
