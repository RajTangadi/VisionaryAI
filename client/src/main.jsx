import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickSpark from './components/ClickSpark.jsx'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickSpark>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </ClickSpark>
  </StrictMode>,
)
