import "./App.css";
import Footer from "./pages/layout/footer";
import Header from "./pages/layout/header";
import Router from "./router";
import React from "react";
import styled from "styled-components";


const App = () => {
  const Main = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  `;

  return (
    <Main>
      <Header />
      <Router />
      <Footer />
    </Main>
  );
};

export default App;
