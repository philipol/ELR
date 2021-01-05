import React from 'react'
import styled from "styled-components";
import fbIcon from "../Images/Icons/facebookIcon.png"
import igIcon from "../Images/Icons/instagramIcon.png"

export default function Footer() {
  return (
    <MainFooter>
      <ContactInfoWrapper>
        <MainFootHeader>Kontakt</MainFootHeader>
        <p>Eva Olsson Lönn</p>
        <p><Adresses href="mailto:eva@lonnredovisning.se">eva@lonnredovisning.se</Adresses></p>
        <p><Adresses href="callto://+46702689455">070-268 94 55</Adresses></p>
      </ContactInfoWrapper>
      <SocialsWrapper>
        <NormalHeader>Håll dig uppdaterad</NormalHeader>
        <p><FooterIcons src={fbIcon} alt=""/>Facebook</p>
        <p><FooterIcons src={igIcon} alt=""/> Instagram</p>
      </SocialsWrapper>
      <ContactWrapper>
        <NormalHeader>Ska vi kontakta dig?</NormalHeader>
        <EmailInput type="text" placeholder="Skriv din mejl adress"/>
        <EmailBtn>Skicka</EmailBtn>
      </ContactWrapper>
    </MainFooter>
  )
}

const MainFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3% 10%;
  width: 80%;
  color: #192437;
  background-color: #a58f6f;
`
const ContactInfoWrapper = styled.div`
  grid-column: 1;
  width: 100%;
  display: block;
`
const Adresses = styled.a`
  color: #192437;
`
const MainFootHeader = styled.p`
  font-size: 22px;
  font-weight: bold;
`

const SocialsWrapper = styled.div`
  transform: translateX(25%);
`
const ContactWrapper = styled.div`
  transform: translateX(25%);
`
const EmailInput = styled.input`
  background-color: transparent;
  padding: 1%;
  color: #192437;
  border: 2px solid #192437;
  border-radius: 5px;
  ::placeholder{
    color: #192437;
  }
  `
const EmailBtn = styled.button`
  background-color: #192437;
  padding: 1%;
  margin-left: 1%;
  color: #a58f6f;
  border: 2px solid #192437;
  border-radius: 5px;
`
const NormalHeader = styled.p`
  font-size: 22px;
`
const FooterIcons = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: -13px;
`