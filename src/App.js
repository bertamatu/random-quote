import React from "react";
import GetQuote from "./components/GetQuote";
import styled from "styled-components";

const AppContainer = styled.main`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <GetQuote />
    </AppContainer>
  );
}

export default App;
