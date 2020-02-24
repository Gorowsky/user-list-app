import React from 'react';
import './services/interceptor';
import theme from './theme/theme.config';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ThemeProvider } from '@material-ui/core';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
