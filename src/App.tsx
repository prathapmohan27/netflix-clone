import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from './components/navBar/NavBar';

const GlobalStyle = createGlobalStyle`
 body,h1,h2,h3,p {
  margin: 0;
}
`;
const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
    </div>
  );
};

export default App;
