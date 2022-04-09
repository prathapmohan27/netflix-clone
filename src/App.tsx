import React from 'react';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/navBar/NavBar';
import Home from './components/Page/Home';
const GlobalStyle = createGlobalStyle`
 body,h1,h2,h3,p {
  margin: 0;
}
body{
  font-family: 'sans-serif';
  background-color: 	#000000;
  color: white;
}
`;

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
