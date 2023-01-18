import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Details } from './pages/Details';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignIn } from './pages/SignIn';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
