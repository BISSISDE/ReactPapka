import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './Takyrptar/Magnum'
// import Kolesa from './Koleso'
// import Ai from "./Ai.jsx";
import App from './LastExamReact.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Kolesa /> */}
    {/* <Ai /> */}
    <App/>
  </StrictMode>
);
