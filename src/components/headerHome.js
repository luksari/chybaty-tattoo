import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import posed from "react-pose"
import Navbar from "./navbar"
import NavbarMobile from "./navbarMobile"
import { useWindowWidth } from "../helpers/useWindowWidth"

const HeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  background-color: black;
`

const HeaderText = posed.h2({
  enter: { 
    opacity: 1,
    delay: 200, 
  },
  exit: { opacity: 0 }
});

const StyledHeaderText = styled(HeaderText)`
  position: absolute;
  top: 130px;
  left: 900px;
  font-size: 155px;
  width: 656px;
  color: #fff;
  font-family: 'Unica One';
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 31px;
  line-height: 165px;
  span {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: #fff;
  }
  
`

const HeaderHome = () => {
  const width = useWindowWidth()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "chybatytattoo-header.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <HeaderContainer>
        {width >= 600 ? <Navbar /> : <NavbarMobile />}
        {width >= 1025 ? (
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              position: "absolute",
              height: "700px",
              width: "1000px",
              bottom: 0,
            }}
          />
        ) : (
          <Img fluid={data.file.childImageSharp.fluid} />
        )}
        <StyledHeaderText initialPose="exit" pose="enter" >Poznaj <span>naszą ekipę!</span></StyledHeaderText>
      </HeaderContainer>
    </React.Fragment>
  )
}

export default HeaderHome;
