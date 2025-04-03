import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickSpark from './components/ClickSpark.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickSpark>
    <ThemeProvider>
    <App />
    <ToastContainer />
    </ThemeProvider>
    </ClickSpark>
  </StrictMode>,
)
