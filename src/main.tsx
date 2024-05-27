// import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Route/index.tsx'
import { RouterProvider } from 'react-router-dom'

import './styles/app.sass'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
