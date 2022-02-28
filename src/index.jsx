import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { accountService } from './services/account.service';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// attempt silent token refresh before startup
accountService.refreshToken().finally();


const theme = createTheme({
  palette: {
    primary: {
      main: '#030139',
    },
    secondary: {
      main: '#f26a19',
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
