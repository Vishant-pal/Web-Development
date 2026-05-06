import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import QuotesData from './Components/Quotes/quotes_data/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <QuotesData/>
  </StrictMode>,
)
