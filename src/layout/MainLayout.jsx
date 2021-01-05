import React from 'react'
import styled from "styled-components";
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    <MainBody>
      <Header/>
        <div>{children}</div>
      <Footer/>
    </MainBody>
  )
}
export default MainLayout


const MainBody = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`