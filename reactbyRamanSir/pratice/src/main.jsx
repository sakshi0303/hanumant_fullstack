import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import About from './Pages/About.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Home from './Pages/Home.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route  path='about' element={<About/>}/>
      <Route  path='contact' element={<ContactUs/>}/>
      <Route  path='' element={<Home/>}/>

    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
