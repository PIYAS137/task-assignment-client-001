import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Routes'
import './index.css'
import FirebaseContext from './Context/FirebaseContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={route} />
      </QueryClientProvider>
    </FirebaseContext>
  </React.StrictMode>,
)
