import React, { useState } from "react"
import posed from "react-pose"
import styled from "styled-components"

const NavbarMobileWrapper = styled.nav`
  display: block;
`

const NavbarMobileContainer = styled.div`
  display: block;
  position: relative;
  float: right;
  z-index: 1;
  top: 15px;
  right: 15px;
  -webkit-user-select: none;
  user-select: none;
`

const NavbarInput = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -8px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;

  &:checked ~ ul {
    transform: none;
  }

  &:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  &:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
`

const HamburgerLine = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: white;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`

const MobileMenu = posed.ul({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    delayChildren: 200,
    staggerChildren: 50,
  },
})

const StyledMobileMenu = styled(MobileMenu)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: -32px;
  right: -15px;
  width: 100vw;
  height: 100vh;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
`

const MobileMenuItem = posed.li({
  visible: { y: 0, opacity: 1 },
  hidden: { y: 20, opacity: 0 },
})

const StyledMobileMenuItem = styled(MobileMenuItem)`
  text-align: center;
`

const NavbarMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <NavbarMobileWrapper role="navigation">
      <NavbarMobileContainer>
        <NavbarInput
          type="checkbox"
          onClick={e => setMobileMenu(e.target.checked)}
        />

        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />

        <StyledMobileMenu pose={mobileMenu ? "visible" : "hidden"}>
          <StyledMobileMenuItem>Home</StyledMobileMenuItem>
          <StyledMobileMenuItem>About</StyledMobileMenuItem>
          <StyledMobileMenuItem>Info</StyledMobileMenuItem>
          <StyledMobileMenuItem>Contact</StyledMobileMenuItem>
          <StyledMobileMenuItem>Show me more</StyledMobileMenuItem>
        </StyledMobileMenu>
      </NavbarMobileContainer>
    </NavbarMobileWrapper>
  )
}

export default NavbarMobile
