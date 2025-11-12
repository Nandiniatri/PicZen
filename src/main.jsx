import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppEventProvider from './contextApi/AppEventContext.jsx'
import { makeServer } from './mirageJs/server.js'


makeServer();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEventProvider>
      <App />
    </AppEventProvider>
  </StrictMode>,
)
