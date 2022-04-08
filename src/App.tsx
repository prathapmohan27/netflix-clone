import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
const GlobalStyle = createGlobalStyle`
 body,h1,h2,h3,p {
  margin: 0;
}
body{
  font-family: 'sans-serif';
}
`;

const App = () => {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalStyle />
      <NavBar />
      <Header />
    </div>
  );
};

export default App;
