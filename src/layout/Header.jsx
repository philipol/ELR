import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../Images/elrLogoBlaNY.jpg'

const Header = () => {
  return (
    <MainHeader>
      <LogoWrapper>
        <Link to={"/"}>
          <Mainlogo src={logo} alt="ELR Logo"/>
        </Link>
      </LogoWrapper>
      <NavWrapper>
        <Nav>
          <NavItems to={"/"}>Hem</NavItems>
          <NavItems to={"/tjänster"}>Tjänster</NavItems>
          <NavItems to={"/kontakt"}>Kontakt</NavItems>
        </Nav>
      </NavWrapper>
    </MainHeader>
  )
}
export default Header

const MainHeader = styled.div `
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  height: 90px;
  background-color: #192437;
  position: fixed;
  z-index: 11;
`

const LogoWrapper = styled.div `
  grid-column: 1;
  width: 350px;
  height: 75px;
`
const Mainlogo = styled.img `
  display: grid;
  place-items: center;
  width: 295px;
  color: white;
  padding-left: 10%;
  padding-right: 10%;
  margin-left: 10%;
`

const NavWrapper = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1.5fr 350px 0.25fr;
  place-items: center;
`
const Nav = styled.nav `
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  text-align: center;
`
const NavItems = styled(Link)`
  max-width: 100px;
  color: #a58f6f;
  text-decoration: none;
  list-style: none;
  font-size: 22px;
  font-weight: 400;
  cursor: pointer;
  :active {
    color: #58401c;
    //color: #e9d0aa;
  }
`
