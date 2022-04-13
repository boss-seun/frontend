import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/provider';
import { ModalProvider } from './context/modal';
import { BirthProvider } from './context/birth';
import { DeathProvider } from './context/death';
import { UserProvider } from './context/user';
import App from './App';
import theme from './theme';
import { BASE_URL } from './utils/constants';
// set axios interceptors
axios.defaults.baseURL = BASE_URL
axios.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${token}` 
    }
  }

  return req;
});

axios.interceptors.response.use((res) => {
  return res.data || res;
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ModalProvider>
      <BirthProvider>
        <DeathProvider>
          <BrowserRouter>
            <UserProvider>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </UserProvider>
          </BrowserRouter>
        </DeathProvider>
      </BirthProvider>
    </ModalProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
