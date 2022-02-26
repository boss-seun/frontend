import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/provider';
import { ModalProvider } from './context/modal';
import { BirthProvider } from './context/birth';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ModalProvider>
      <BirthProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </BirthProvider>
    </ModalProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
