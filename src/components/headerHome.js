import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { device } from '../helpers/mediaQueries'
import { motion } from "framer-motion"

const HeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  background-color: black;
  width: 100%;
`
const HeaderImg = styled(Img)`
    width: 100%;
    height: auto;
    bottom: 0;
    @media ${device.tablet} {
      height: auto;
      bottom: 0;
    }
    @media ${device.laptop} {
      height: 75%;
      width: 57%;
      bottom: 0;
    }
    
`

const headerVariants = {
  enter: { 
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
  exit: { opacity: 0 }
}

const StyledHeaderText = styled(motion.h2).attrs({ variants: headerVariants, initial: 'exit', animate: 'enter'})`
  position: absolute;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  top: 100px;
  left: 0;
  text-align: center;
  font-size: 100px;
  margin-top: 35px;
  background-color: #000000cb;
  width: 100%;
  padding: 55px 0;
  span {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-color: #fff;
      -webkit-text-stroke-width: 1px;

   }
  @media ${device.tablet} {
    width: 656px;
    text-align: left;
    padding: 55px;
  }
  @media ${device.laptop} {
    letter-spacing: 31px;
    line-height: 165px;
    padding: 0;
    top: 12%;
    left: 45%;
    font-size: 155px;
    width: 750px;
    background: transparent;
    span {
      -webkit-text-stroke-width: 5px;
    }
  }


  
`

const HeaderHome = () => {
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
    <>
      <HeaderContainer>
        <HeaderImg
          fluid={data.file.childImageSharp.fluid} 
          style={{  position: 'absolute' }}
          />
        <StyledHeaderText>Poznaj <span>naszą ekipę!</span></StyledHeaderText>
      </HeaderContainer>
    </>
  )
}

export default HeaderHome;
