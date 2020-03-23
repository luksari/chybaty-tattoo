import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 0;
  height: 90px;
  background-color: black;
`
const NavItem = styled.a`
  color: white;
  margin: 0px 20px;
  cursor: pointer;
  text-transform: uppercase;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`
const Navbar = () => {
  return (
    <Nav>
      <NavItem>O NAS</NavItem>
      <NavItem>EKIPA</NavItem>
      <NavItem>FAQ</NavItem>
      <NavItem>KUP VOUCHER</NavItem>
      <NavItem>KONTAKT</NavItem>
    </Nav>
  )
}

export default Navbar;
