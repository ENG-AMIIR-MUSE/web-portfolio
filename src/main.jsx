import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './context/ThemeProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ThemeProvider>
<BrowserRouter>
    <App />
    <Toaster />
</BrowserRouter>
</ThemeProvider>
  </React.StrictMode>,
)
