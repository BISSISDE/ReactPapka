import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './Takyrptar/Magnum'
import Kolesa from './Koleso'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Kolesa />
  </StrictMode>,
)
