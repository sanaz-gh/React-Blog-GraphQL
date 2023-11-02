import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './styles/index.css';
import './styles/fonts.css';

import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BLOG_GQL_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ApolloProvider client={client}>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
     <App />
  </ThemeProvider>
  </BrowserRouter>
</ApolloProvider>,
);


