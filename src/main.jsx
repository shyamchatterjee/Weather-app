import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//  import './index.css'
import App from './component/App.jsx'
import { ContextFuntion } from './component/context/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextFuntion>
    <App />
    </ContextFuntion>
  </StrictMode>,
)
