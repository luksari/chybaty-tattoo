import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
import NavbarMobile from "./navbarMobile"
import { useWindowWidth } from "../helpers/useWindowWidth"

const HeaderContainer = styled.header`
  position: relative;
  background-color: black;
  width: 100%;
`

const HeaderFaq = () => {
  const width = useWindowWidth()

  return (
    <>
      <HeaderContainer>
        {width >= 600 ? <Navbar /> : <NavbarMobile />}
      </HeaderContainer>
    </>
  )
}

export default HeaderFaq;