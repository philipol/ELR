import React from 'react'
import styled from "styled-components";

export default function Clients() {
  return (
    <ClientSection>
      <ClientsWrapper>
        <Client src="https://source.unsplash.com/random/200x200" alt=""/>
        <Client src="https://source.unsplash.com/random/200x200" alt=""/>
        <Client src="https://source.unsplash.com/random/200x200" alt=""/>
        <Client src="https://source.unsplash.com/random/200x200" alt=""/>
        <Client src="https://source.unsplash.com/random/200x200" alt=""/>
        <Client src="https://source.unsplash.com/random/200x200" alt=""/>
        <Client src="https://source.unsplash.com/random/200x200" alt=""/>
      </ClientsWrapper>
    </ClientSection>
  )
}
const ClientSection = styled.section`
  max-width: 100%;
  overflow: scroll;
  padding: 0;
  margin: 0;
`

const ClientsWrapper = styled.div`
  display: inline-block;
  height: 190px;
  padding: 3%;
  width: 200%;
`
const Client = styled.img`
  background-color: black;
  width: auto;
  height: 200px;
  margin: 0 50px;
`
