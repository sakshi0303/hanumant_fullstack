import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

import Welcome from './Components/Welcome.jsx'
import Register from './Components/Register.jsx'



let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='' element={<Register/>}/>
      <Route path='/welcome' element={<Welcome/>}/>

    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
