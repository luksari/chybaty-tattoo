import React from "react"
import styled, { css } from "styled-components"
import { Link } from 'gatsby';
import { Routes } from "../helpers/routes";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 45px 75px;
  height: auto;
  background-color: black;
`
const commonNavItemStyles = css`
  color: white;
  margin: 0px 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 6px;
  position: relative;
  text-decoration: none;
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

const NavItem = styled(Link)`
  ${commonNavItemStyles};
`;

const NavItemAnchor = styled.a`
  ${commonNavItemStyles}
`
const Navbar = () => {
  return (
    <Nav>
      <NavItem to={Routes.Root()}>O nas</NavItem>
      <NavItemAnchor onClick={() => scrollTo('#crew')}>Ekipa</NavItemAnchor>
      <NavItem to={Routes.FAQ()}>FAQ</NavItem>
      <NavItem to={Routes.Voucher()}>Kup voucher</NavItem>
      <NavItem to={Routes.Contact()}>Kontakt</NavItem>
    </Nav>
  )
}

export default Navbar;
