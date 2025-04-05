import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter} from 'react-router-dom'
import './i18n'; 
import { ThemeProvider } from './contexts/ThemeContext.tsx';


createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>  
  </ThemeProvider>
  
)
