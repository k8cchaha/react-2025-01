import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Post from './components/Post'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Post />
    <Post />
  </StrictMode>,
)
