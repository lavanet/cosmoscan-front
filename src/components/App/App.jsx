import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styled/GlobalStyles';
import theme from '../../utils/theme';
import LayoutDefault from '../../layouts/LayoutDefault';
import Routes from '../../routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../plugins/faLibrary';
import { StateProvider } from '../../store';
import { ChainsProvider } from '../../store/chainContext';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <StateProvider>
        <ChainsProvider>
          <LayoutDefault>
            <Routes />
          </LayoutDefault>
        </ChainsProvider>
      </StateProvider>
    </ThemeProvider>
  </Router>
);

export default App;
