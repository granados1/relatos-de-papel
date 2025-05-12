import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { General } from './views/General.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General />
  </StrictMode>,
)
