import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import store from './store';
// import { Provider } from 'react-redux'
import theme from './utils/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      {/*<Provider store={store}>*/}
      <ThemeProvider theme={theme.light}>
        <App />
      </ThemeProvider>
      {/*</Provider>*/}
    </Router>
  </React.StrictMode>
);
