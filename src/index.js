import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { global, reset } from './styles/global';
import App from './App';
import { AuthProvider } from './context/auth-context';
import { PlacesProvider } from './context/places-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={reset} />
      <Global styles={global} />
      <AuthProvider>
        <PlacesProvider>
          <App />
        </PlacesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
