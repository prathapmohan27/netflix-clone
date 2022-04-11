import React from 'react';
import { createGlobalStyle } from 'styled-components';
import InternalRoute from './components/router/InternalRoute';
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
      <InternalRoute />
    </div>
  );
};

export default App;
