import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import posed from "react-pose"
import Navbar from "./navbar"
import NavbarMobile from "./navbarMobile"
import { useWindowWidth } from "../helpers/useWindowWidth"
import HeaderSVG from '../images/Poznaj.svg'

const HeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  background-color: black;
`

const HeaderText = posed.img({
  enter: { 
    opacity: 1,
    delay: 200, 
  },
  exit: { opacity: 0 }
});

const StyledHeaderText = styled(HeaderText)`
  position: absolute;
  top: 170px;
  left: 700px;
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
        <StyledHeaderText initialPose="exit" pose="enter" src={HeaderSVG}/>
      </HeaderContainer>
    </React.Fragment>
  )
}

export default HeaderHome;
