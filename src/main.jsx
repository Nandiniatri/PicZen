import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppEventProvider from './contextApi/AppEventContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppEventProvider>
        <App />
      </AppEventProvider>
    </BrowserRouter>
  </StrictMode>
)
