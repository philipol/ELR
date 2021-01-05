import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import RedIcon from "../../Images/Icons/RedovisningIcon.svg"
import DekIcon from "../../Images/Icons/DeklarationIcon.png"
import LonerIcon from "../../Images/Icons/LonerIcon.png"
import BokIcon from "../../Images/Icons/BokslutIcon.svg"

export default function ServicesSection() {
  return (
    <ServicesSectionWrapper>
      <ServiceHeading>Tjänster vi erbjuder</ServiceHeading>
      <ServiceInfo>
        Vi erbjuder en mängd olika tjänster när det kommer till att hjälpa er med ekonomin.
      </ServiceInfo>
      <ServicesWrapper>
        <ServiceWrapper>
          <ServiceLink to={"/tjänster"}>
            <ServicesIcon src={RedIcon} alt=""/>
            <ServiceName>Löpande redovisnng</ServiceName>
          </ServiceLink>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceLink to={"/tjänster"}>
            <ServicesIcon src={DekIcon} alt=""/>
            <ServiceName>Deklaration</ServiceName>
          </ServiceLink>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceLink to={"/tjänster"}>
            <ServicesIcon src={LonerIcon} alt=""/>
            <ServiceName>Löner</ServiceName>
          </ServiceLink>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceLink to={"/tjänster"}>
            <ServicesIcon src={BokIcon} alt=""/>
            <ServiceName>Bokslut/Årsredovisning</ServiceName>
          </ServiceLink>
        </ServiceWrapper>
      </ServicesWrapper>
      <LinkButtonWrapper>
        <Link to={"/tjänster"}><ServicesBtn>Läs mer om våra tjänster</ServicesBtn></Link>
      </LinkButtonWrapper>
    </ServicesSectionWrapper>
  )
}

const ServicesSectionWrapper = styled.div`
  width: 90%;
  height: auto;
  padding: 4% 5%;
  background-color: white;
  margin-top: -20px;
`
const ServiceHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 24px;
  margin-bottom: 0;
  color: #192437;
`
const ServiceInfo = styled.p`
  width: 50%;
  margin-left: 25%;
  margin-bottom: 5%;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  color: #192437;
`
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
`
const ServicesIcon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid black;
  object-fit: cover;
  margin: 0 !important;
`
const ServiceWrapper = styled.div`
  display: grid;
  place-items: center;
`
const ServiceLink = styled(Link)`
  display: grid;
  place-items: center;
  text-decoration-color: #192437;
`
const ServiceName = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #192437;
`
const LinkButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 10px;
`
const ServicesBtn = styled.button`
  border-radius: 5px;
  background-color: white;
  width: 265px;
  font-size: 21px;
  color: black;
  border: 2px solid black;
  padding: 4% 0;
  margin-top: 25px;
  cursor: pointer;
`