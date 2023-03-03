import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RegroupAll } from './regroupAll'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
      <HashRouter>
        <RegroupAll />
      </HashRouter>
  </React.StrictMode>
)
