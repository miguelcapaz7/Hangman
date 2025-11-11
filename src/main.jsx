import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './assets/styles/main.css'
import './assets/styles/Hangman/hangman.css'
import './assets/styles/Results/results.css';

const Router = import.meta.env.MODE === 'production' ? HashRouter : BrowserRouter;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
