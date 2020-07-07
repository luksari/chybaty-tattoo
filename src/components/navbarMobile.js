import React, { useState } from "react"
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { Routes } from '../helpers/routes'
import styled from "styled-components"


const NavbarMobileContainer = styled.nav`
  display: flex;
  z-index: 12;
  padding: 20px;
  position: fixed;
  width: 100%;
  -webkit-user-select: none;
  user-select: none;
  justify-content: flex-end;
`

const HamburgerLines = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  background: white;
  border-radius: 3px;
  position: relative;
  margin: 5px 0;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 0;

  &:before, &::after {
    display: block;
    position: absolute;
    content: '';
    width: 33px;
    height: 4px;
    background: white;
    border-radius: 3px;
    z-index: 0;
    transition-duration: 0s;
    transition-delay: 0.1s;
    transition-timing-function: linear;
  }

  &::before {
    top: -8px;
    transition-property: bottom, transform;
  }
  &::after {
    bottom: -8px;
    transition-property: top, opacity;
  }
`
const NavbarInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  display: block;
  width: 40px;
  height: 32px;
  cursor: pointer;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-touch-callout: none;
  
  &:checked ~ ${HamburgerLines} {
    background: #232323;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    transform: rotate(765deg);
    &::before, &::after {
      background: #232323;
      transition-delay: 0s;
    }
    &::before {
      top: 0;
      opacity: 0;
    }

    &::after {
      bottom: 0;
      transform: rotate(90deg);
    }
  }

`

const HamburgerContainer = styled.div`
  position: relative;
  z-index: 10;
`

const menuVartiant = {
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
 
  },
  exit: { opacity: 0 },
}


const StyledMobileMenu = styled(motion.ul)`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;

`

const itemVariants = {
  enter: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
}

const StyledMobileMenuItem = styled(motion.custom(Link)).attrs({ variants: itemVariants })`
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
  padding: 15px 0;
  text-decoration: none;
  color: #2e2e2e;
  transition: color 0.2s;
  &:hover {
    color: #000;
  }
`

const NavbarMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
      <NavbarMobileContainer role="navigation">
        <HamburgerContainer>
          <NavbarInput
            onClick={e => setMobileMenu(e.target.checked)}
          />
            <HamburgerLines />
        </HamburgerContainer>

      {mobileMenu && (
          <StyledMobileMenu variants={menuVartiant} initial='exit' animate='enter'>
            <StyledMobileMenuItem to={Routes.Root()}>O nas</StyledMobileMenuItem>
            <StyledMobileMenuItem to={Routes.Crew()}>Ekipa</StyledMobileMenuItem>
            <StyledMobileMenuItem to={Routes.FAQ()}>Faq</StyledMobileMenuItem>
            <StyledMobileMenuItem to={Routes.Voucher()}>Kup Voucher</StyledMobileMenuItem>
            <StyledMobileMenuItem to={Routes.Contact()}>Kontakt</StyledMobileMenuItem>
          </StyledMobileMenu>
          )
        }
      </NavbarMobileContainer>
  )
}

export default NavbarMobile
