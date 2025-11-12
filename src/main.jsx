import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppEventProvider from './contextApi/AppEventContext.jsx'
import { makeServer } from './mirageJs/server.js'
import { BrowserRouter } from 'react-router-dom'

makeServer();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
