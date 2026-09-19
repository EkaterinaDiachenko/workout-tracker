import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.css';
import { Menu } from '@widgets/menu';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu />
  </StrictMode>
)
