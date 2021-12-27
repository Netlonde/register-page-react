import React from 'react';
import GlobalStyle, { ModalContainer } from './styles/globalStyles';
import Register from './components/pages/register';

function App() {
  return (
    <ModalContainer>
      <GlobalStyle />
      <Register />
    </ModalContainer>
  );
}

export default App;
