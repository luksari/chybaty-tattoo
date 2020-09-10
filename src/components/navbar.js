import React from "react"
import styled, { css } from "styled-components"
import { Link } from 'gatsby';
import { Routes } from "../helpers/routes";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Logo from "../images/logo.inline.svg";
import { device } from '../helpers/mediaQueries';

const StyledLogo = styled(Logo)`
  width: auto;
  height: 100%;
`

const StyledLogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  ${({ $isMain }) => $isMain 
    ? css`
      position: absolute;
      left: 75px;
      top: 25px;
      height: 220px;
    `
    : css`
      margin-right: auto;
      height: 135px;
    `
  }
  top: 25px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 45px 75px;
  height: auto;
  z-index: 10;
  background-color: black;
  flex-wrap: wrap;
  justify-content: center;
  ${StyledLogoLink} {
    width: 100%;
  }
  font-family: 'Montserrat', sans-serif;
  @media ${device.laptop} {
    flex-wrap: nowrap;
    justify-content: flex-end;
    ${StyledLogoLink} {
      width: auto;
    }
  }
`
const commonNavItemStyles = css`
  text-decoration: none;
  color: white;
  margin: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 6px;
  position: relative;
  font-size: 12px;
  &:last-of-type {
    margin-right: 0;
  }
  &::after {
    position: absolute;
    width: 100%;
    content: "";
    height: 1px;
    left: 0;
    bottom: -5px;
    background: white;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: transform 0.3s;
  }

  &:hover {
    &::after {
     transform: scaleX(1);
    }
  }
`





const AnchorNavItem = styled(AnchorLink)`
  ${commonNavItemStyles};
`;

const NavItem = styled(Link) `
  ${commonNavItemStyles};
`

const Navbar = ({ isMain }) => {
  return (
    <Nav>
      <StyledLogoLink to={Routes.Root()} $isMain={isMain}>
        <StyledLogo />
      </StyledLogoLink> 
      <NavItem to={Routes.Root()}>O nas</NavItem>
      <AnchorNavItem to={Routes.Crew()}>Ekipa</AnchorNavItem>
      <NavItem to={Routes.FAQ()}>FAQ</NavItem>
      <NavItem to={Routes.Voucher()}>Kup voucher</NavItem>
      <NavItem to={Routes.Contact()}>Kontakt</NavItem>
    </Nav>
  )
}

export default Navbar;
