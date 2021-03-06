import React from 'react'
import styled from 'styled-components'
import Navbar from "./navbar"
import NavbarMobile from "./navbarMobile"
import { useWindowWidth } from "../helpers/useWindowWidth"
import Footer from './footer'
import SEO from './seo';

const LayoutWrapper = styled.main`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
`;

export const Layout = ({ children, title, location }) =>{ 
  const width = useWindowWidth();
  const isMain = location.pathname === '/'
  return (
    <>
      <SEO title={title} />
      <LayoutWrapper>
        {width >= 700 ? <Navbar isMain={isMain}/> : <NavbarMobile />}
        {children}
        <Footer />
      </LayoutWrapper>
    </>
  )
}
