import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Router/Route.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
