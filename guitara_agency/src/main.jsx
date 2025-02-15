import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'animate.css';
import WOW from 'wowjs';

const wow = new WOW.WOW({
  live: false // Optional, controls whether to animate elements that are dynamically added
});
wow.init();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
