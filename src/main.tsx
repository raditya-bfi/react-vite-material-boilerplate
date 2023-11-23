import 'regenerator-runtime';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';

// styles
import './index.css';
import './font.css';
import App from '~/App';
import { AuthProvider } from '~/context/auth/AuthProvider';
import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
