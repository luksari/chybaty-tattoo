import React from 'react'
import styled from 'styled-components'
import Navbar from "./navbar"
import NavbarMobile from "./navbarMobile"
import { useWindowWidth } from "../helpers/useWindowWidth"

const LayoutWrapper = styled.main`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
`;

export const Layout = ({ children }) =>{ 
  const width = useWindowWidth();
  return (
    <LayoutWrapper>
      {width >= 700 ? <Navbar /> : <NavbarMobile />}
      {children}
    </LayoutWrapper>
  )
}
