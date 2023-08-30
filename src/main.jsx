import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import { ShopContextProvider } from './pages/context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ShopContextProvider>
     <Router />
     </ShopContextProvider>
  </React.StrictMode>,
)
