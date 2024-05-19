import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-vd8xcreguoj2zxix.us.auth0.com"
    clientId="qvwD4K6TGJOByBaBe5WtkQwaCdMbbVtI"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/"
    }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
