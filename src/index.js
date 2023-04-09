import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import GlobalStyles from './_styles/globalStyle';
import theme from './_styles/theme';
import { ThemeProvider } from './_styles/themeComponent';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);
