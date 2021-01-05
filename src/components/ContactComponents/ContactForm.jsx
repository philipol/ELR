import React from 'react'
import styled from "styled-components";
import Hero1 from '../../Images/HeroImg1.jpg'

//https://script.google.com/macros/s/AKfycbwqIYe1ONDIIX4TmAx5wOnBaYr2SPK3vvJAcYzu/exec
export default function ContactForm() {
  return (
    <div>
      <HeroImg src={Hero1} alt=""/>
      <HeroOverlay></HeroOverlay>
      <ContactContainer>
        <ContactSection>
          <form action="">
            <FormContainer>
              <ContactText>Hör av dig!</ContactText>
              <InputWrapper>
                <LeftInput>
                  <label htmlFor="name">Ditt namn:</label>
                  <Input type="text" name="name" placeholder="Skriv ditt namn här!"/>
                </LeftInput>
                <RightInputs>
                  <label htmlFor="abName">Företagets namn:</label>
                  <Input type="text" name="abName" placeholder="Skriv företagets namn här!"/>
                </RightInputs>
                <LeftInput>
                  <label htmlFor="email">Email:</label>
                  <Input type="text" name="email" placeholder="Skriv din email här!"/>
                </LeftInput>
                <RightInputs>
                  <label htmlFor="number">Mobilnummer:</label>
                  <Input type="text" name="number" placeholder="Skriv ditt mobilnummer här!"/>
                </RightInputs>
                <CommentInput>
                  <label htmlFor="comment">Kommentar:</label>
                  <TextArea name="comment" id="" cols="30" rows="5" placeholder="Skriv vad ni vill ha hjälp med här!"></TextArea>
                </CommentInput>
                <BtnWrapper>
                  <SubmitBtn type="submit">Skicka</SubmitBtn>
                </BtnWrapper>
              </InputWrapper>
            </FormContainer>
          </form>
        </ContactSection>
      </ContactContainer>
    </div>
  )
}
const ContactContainer = styled.div`
  display: grid;
  place-items: center;
  height: 85vh;
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
const HeroOverlay = styled.div`
  position: absolute;
  grid-column: 1;
  grid-row: 1;
  width:100%;
  height: 100vh;
  background-color: #000000ad;
 // background-color: #2f2f2f26;
  z-index: -1;
`
const ContactSection = styled.section`
  display: grid;
  grid-template-rows: 150px auto;
  margin-top: 90px;
  background-color: #a58f6f7a;
  color: white;
  width: 70%;
  height: 40vh;
  padding: 5%;
`                
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const ContactText = styled.h2`
  font-size: 40px;
`
const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const RightInputs = styled.div`
  margin-left: 10%;
  margin-top: 3%;
  background-color: transparent;
  `
const LeftInput = styled.div`
  margin-top: 3%;
  `
const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
  border: 0;
  height: 30px;
  border: 2px solid #192437;
  ::placeholder{
    color: #192437;
  }
  `
const CommentInput = styled.div`
  width: 100%;
  grid-column: 1/3;
  margin-top: 3%; 
  `
const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
  border: 0;
  border: 2px solid #192437;
  ::placeholder{
    color: #192437;
  }
`
const BtnWrapper = styled.div`
  display: grid;  
  grid-column: 1/3;
  place-items: center;
`
const SubmitBtn = styled.button`
  width: 35%;
  grid-column: 1/3;
  height: 40px;
  border-radius: 5px;
  font-size: 19px;
  border: 2px solid #192437;
  background-color: #192437;
  color: #a58f6f;
  margin-top: 20px;
`




