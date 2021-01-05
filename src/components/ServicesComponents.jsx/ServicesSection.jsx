import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RedIcon from "../../Images/Icons/RedovisningIcon.svg"
import DekIcon from "../../Images/Icons/DeklarationIcon.png"
import LonerIcon from "../../Images/Icons/LonerIcon.png"
import BokIcon from "../../Images/Icons/BokslutIcon.svg"

export default function ServicesSection() {
  const service = {
  red:{
    name: "Löpande redovisnng",
    icon: RedIcon,
    text: `Vi tillhandahåller sedvanliga redovisningstjänster
      samt vad vi kallarsmåföretagarservice som anpassas efter 
      kundens behov och önskemål.Där ingår rådgivning, löpande 
      redovisning, moms- och arbetsgivarrapportering.Kundreskontra, 
      både löpande fakturering och betalningsbevakning.Leverantörsreskontra 
      med registrering och betalning. Vid behov administrerarvi 
      ROT-ansökningar åt byggföretag. Vi förser kunden med önskvärda rapporter.`,
    price: "600kr"
    },
    dek:{
      name: "Deklaration",
      icon: DekIcon,
      text: `På Lönn Redovisning har vi en mångårig erfarenhet av deklarationsarbetet 
        och håller oss alltid uppdaterade med de ändringar och nyheter som finns 
        inom skatter. Med vår hjälp ser du till att deklaration, moms, skatter 
        och avgifter görs och betalas i rätt tid. Vi sköter samtliga löpande 
        deklarationer som en del av den löpande bokföringen. Det uppstår även 
        separata deklarationer förutom de löpande som ska deklareras efter 
        bokslutsarbetet. Vi hjälper företagare med detta och mycket mer!`,
      price: "750kr"
    },
    Loner:{
      name: "Löner",
      icon: LonerIcon,
      text: `Vi administrerar det mesta inom lönehantering såsom löneberäkning, 
      registrering, löneutbetalningar, utskick av löneavier samt kontrolluppgifter. 
      Vid önskemål sköter vi rapportering till Collectum, Fora samt övrig statistik.`,
      price: "600kr"
    },
    Bok:{
      name: "Bokslut/Årsredovisning",
      icon: BokIcon,
      text: `För samtliga bolagsformer upprättar vi bokslut samt årsredovisning som i
       förekommande fall bolagets revisor tar del av och reviderar. Revisionen sker 
       oftast på plats hos oss. Vid behov upprättar vi även delårsbokslut.`,
      price: "750kr"
    }
  }
  const [activeName, setActiveName] = useState()
  const [activeIcon, setActiveIcon] = useState()
  const [activeText, setActiveText] = useState()
  const [activePrice, setActivePrice] = useState()
  const changeService = (prop) => {
    let name = prop.name
    let icon = prop.icon
    let text = prop.text
    let price = prop.price
    setActiveName(name)
    setActiveIcon(icon)
    setActiveText(text)
    setActivePrice(price)
  }
  return (
    <ServicesSectionWrapper>
      <ServiceHeading>Tjänster vi erbjuder</ServiceHeading>
      <ServiceInfo>Efter kundens önskemål brukar vi erbjuda fasta månadsarvoden, 
        vilket är väldigt uppskattat av våra klienter. Vi går igenom volymen på 
        ditt månatliga bokföringsunderlag och kommer med fast prisförslag därefter. 
        Kontakta oss för kostnadsfri genomgång och prisförslag.
      </ServiceInfo>
      <ServicesWrapper>
        <ServiceWrapper>
          <ServiceLink onClick={() => changeService(service.red)}>
            <ServicesIcon src={RedIcon} alt="Redovisnings Ikon"/>
            <ServiceName>Löpande redovisnng</ServiceName>
          </ServiceLink>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceLink onClick={() => changeService(service.dek)}>
            <ServicesIcon src={DekIcon} alt="Deklarations Ikon"/>
            <ServiceName>Deklaration</ServiceName>
          </ServiceLink>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceLink onClick={() => changeService(service.Loner)}>
            <ServicesIcon src={LonerIcon} alt="Löner Ikon"/>
            <ServiceName>Löner</ServiceName>
          </ServiceLink>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceLink onClick={() => changeService(service.Bok)}>
            <ServicesIcon src={BokIcon} alt="Bokföring Ikon"/>
            <ServiceName>Bokslut/Årsredovisning</ServiceName>
          </ServiceLink>
        </ServiceWrapper>
      </ServicesWrapper>
      <ActiveServiceWrapper>
        <ActiveServiceName>{activeName && activeName || service.red.name}</ActiveServiceName>
        <ServiceImg src={activeIcon && activeIcon || RedIcon} alt=""/>
        <ActiveServiceText>
          {activeText && activeText ||service.red.text}
        </ActiveServiceText>
        <ActiveServicePrice>Pris {activePrice && activePrice || service.red.price}/timmen</ActiveServicePrice>
        <LinkButtonWrapper>
          <Link to={"/kontakt"}><ServicesBtn>Kontakta oss så hjälper vi er</ServicesBtn></Link>
        </LinkButtonWrapper>
      </ActiveServiceWrapper>
    </ServicesSectionWrapper>
  )
}

const ServicesSectionWrapper = styled.div`
  width: 90%;
  height: auto;
  padding: 3% 5%;
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
const ServiceLink = styled.button`
  display: grid;
  place-items: center;
  padding-top: 6%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 250px;
  background-color: white;
  cursor: pointer;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    //zoom: 1.1;
  }
`
const ServiceName = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #192437;
`
const ActiveServiceWrapper = styled.div`
  display: grid;
  grid-template-rows: 70px auto 50px 50px;
  padding: 5%;
  padding-top: 2%;
`
const ActiveServiceName = styled.h3`
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  font-size: 24px;
`
const ActiveServiceText = styled.p`
  grid-row: 2;
  font-size: 18px;
  margin: 0;
`
const ServiceImg = styled.img`
  grid-row: 2/5;
  padding-right: 5px;
  height: 100%;
`
const ActiveServicePrice = styled.h4`
  grid-row: 3;
`
const LinkButtonWrapper = styled.div`
  grid-row: 4;
  width: 100%;
`
const ServicesBtn = styled.button`
  border-radius: 5px;
  background-color: white;
  width: 285px;
  height: 50px;
  font-size: 21px;
  color: black;
  border: 2px solid black;
`