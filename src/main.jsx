import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Routes'
import './index.css'
import FirebaseContext from './Context/FirebaseContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext>
      <RouterProvider router={route} />
    </FirebaseContext>
  </React.StrictMode>,
)
