import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Route.tsx'
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
      <ToastContainer/>
     </BrowserRouter>
  </React.StrictMode>,
)
