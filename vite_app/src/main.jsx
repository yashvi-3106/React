import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Homepage.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage/>
    <style/>
  </StrictMode>,
)
