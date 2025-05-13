import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { General } from './views/General.jsx'
import { BrowserRouter as Router } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <Router>
    <General />
  </Router>,
)
