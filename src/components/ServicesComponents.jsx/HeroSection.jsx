import React from "react";
import styled from "styled-components";
import Hero1 from '../../Images/HeroImg1.jpg'
import { Link } from "react-router-dom";

export default function HeroSection() {

  return (
    <HeroWrapper>
      <HeroImg src={Hero1} alt=""/>
      <HeroOverlay></HeroOverlay>
      <HeroInfoWrapper>
        <HeroInfo>
          <MainHeading>Det här gör vi på <br/> Eva Lönn Redovisning</MainHeading>
          <InfoButton>
            <HeadingLink to={"/kontakt"}>Kontakta oss nu</HeadingLink>
          </InfoButton>
        </HeroInfo>
      </HeroInfoWrapper>
    </HeroWrapper>
  )
}
const HeroWrapper = styled.div`
  display: grid;
  height: 65vh;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`
const HeroOverlay = styled.div`
  grid-column: 1;
  grid-row: 1;
  width:100%;
  height: 65vh;
  background-color: #000000ad;
  z-index: -1;
`
const HeroImg = styled.img`
  grid-column: 1;
  grid-row: 1;
  width:100%;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  z-index: -1;
`
const HeroInfoWrapper = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  z-index: 3;
  place-items: center;
  margin-left: -40%;
  margin-bottom: -5%;
`
const HeroInfo = styled.div`
  height: 295px;
`
const MainHeading = styled.h1`
  color: #905f18;
  font-size: 55px;
  margin-bottom: 20px;
`
const HeadingLink = styled(Link)`
  color: #a58f6f;
  text-decoration: none;
  list-style: none;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  :active {
    color: #58401c;
  }
`
const InfoButton = styled.button`
  border-radius: 5px;
  background-color: #192437;
  border: 2px solid #a58f6f;
  height: 55px;
  width: 225px;
`