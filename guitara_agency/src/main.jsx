// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Remove StrictMode for testing
createRoot(document.getElementById('root')).render(
  <App />
);