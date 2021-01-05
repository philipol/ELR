import React from "react";
import './App.css';
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainStructure>
      <Route path="/tjänster" component={Services} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/" exact component={Home} />
    </MainStructure>
  );
}

export default App;

const MainStructure = styled(MainLayout)`
  
`
