import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import InstructorLogin from './pages/InstructorLogin'

function App() {
  

  return (
    <>
       <div>
        

        <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/stundetLogin' element={<Login/>}/>
          <Route path='/adminLogin' element={<AdminLogin/>}/>
          <Route path='/instructorLogin' element={<InstructorLogin/>}/>

        </Routes>
        </BrowserRouter>
       </div>
    </>
  )
}

export default App
