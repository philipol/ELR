import React from 'react'
import styled from "styled-components";
import Maple from "../../Images/Maple.png"

export default function About() {
  return (
    <AboutWrapper>
      <TextWrapper>
        <AboutHeading>Eva Lönn Redovisning</AboutHeading>
        <AboutText>
          Eva Lönn Redovisning ägs och drivs av Eva Olsson Lönn. Jag har jobbat med ekonomiadministartion och bokföring i små och medelstora företag hela mitt yrkesverksamma liv.
          Jag har erfarenhet av rådgivning och ekonomi från olika brancher t.ex. Finans, Resturang, Förskola, Städbolag .mm.
          Jag fortbildar mig löpande för att hålla mig uppdaterad med nya lagar och regler inom redovisning, skatt och juridik inom bolagsområdet.
          Jag strävar efter att arbeta så kostnadseffektivt som möjligt med er företagsekonomi.
          Jag kan hjälpa erat företag inom alla verksamhetsområden att strukturera era rutiner för hur en administration och ekonomifunktion skall fungera.
          Jag har jobbat med allt från ax till limpa fråna löpande bokföring, avstämmningar, bokslut/årsredovisning, löner, rapportering till skatteverket, finansiell rapportering och deklarationer.
          Jag skräddarsyr lösningar och uppdrag för varje klient och dess problem och behov.
        </AboutText>
      </TextWrapper>
      <ImgWrapper>
        <AboutImg src={Maple} alt=""/>
      </ImgWrapper>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 90%;
  padding: 5%;
  background-color: white;
`
const TextWrapper = styled.div`
  grid-column: 1;
  padding: 5%;
  padding-right: 15%;
  margin-right: -20%;
  border: 20px solid #a58f6f;
`
const AboutHeading = styled.h4`
  font-size: 34px;
  margin-bottom: 10px;
  color: #192437;
`
const AboutText = styled.p`
  line-height: 1.4;
  text-align: justify;
  color: #192437;
  font-size: 18px;
`
const ImgWrapper = styled.div`
  grid-column: 2;
  display: grid;
  place-items: center;
`
const AboutImg = styled.img`
  height: auto;
  max-height: 78%;
  margin-top: -27%;
  border: 10px solid #192437;
  padding: 3%;
  background-color: #192437a1;
` 