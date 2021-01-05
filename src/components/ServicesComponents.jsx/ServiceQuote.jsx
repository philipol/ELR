import React from 'react'
import styled from "styled-components";

export default function ServiceQuote() {
  const location = window.location.pathname
  console.log(location)
  return (
    <QuoteContainer>
      <QuoteWrapper>
        <QuoteTextTop><QuoteSign>"</QuoteSign>Vi på Lönnredovisning har över 10 års</QuoteTextTop>
        <QuoteTextBottom>erfarenhet av Löpande redovisning<QuoteSign>"</QuoteSign></QuoteTextBottom>
      </QuoteWrapper>
    </QuoteContainer>
  )
}

const QuoteContainer = styled.div`
  display: grid;
  place-items: center;
`
const QuoteTextTop = styled.p`
  color: white;
  font-size: 32px;
  width: 88%;
  text-align: center;
  margin-right: 12%;
  margin-bottom: 0;
  font-weight: 500;
`
const QuoteTextBottom = styled.p`
  color: white;
  font-size: 32px;
  width: 88%;
  text-align: center;
  margin-top: -30px;
  margin-left: 12%;
  font-weight: 500;
`
const QuoteSign = styled.span`
  font-size: 65px;
  font-weight: 700;
`
const QuoteWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
`