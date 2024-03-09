import axios from 'axios'
import  { useState } from 'react'
import {useNavigate } from 'react-router-dom'
export default function Register() { 

    const [data, setData] = useState({
        email:"",
        password:"",
        student: "",
        instructor:"",
        admin:""
    })

  const navigate = useNavigate()
    
    const handleChnage = (e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }

    const handleSubmit =async()=>{
        if (data.student == "on") {
            navigate('/stundetLogin') 
        }else if(data.instructor == "on"){
            navigate('/instructorLogin') 
        }else if (data.admin == "on"){
            navigate('/adminLogin') 
        }else{
            navigate('/regiter') 
        }

    //   data.student == "on" ? navigate('/stundetLogin') : navigate('/adminL')
          
    }
  return (
    <div>
      <input onChange={handleChnage} id='email' type="text" name="" placeholder='enter the email' />
      <input onChange={handleChnage} id='password' type="text" name="" placeholder='enter the paswword' />
      <label htmlFor="student">student</label>
      <input onChange={handleChnage} id='student' type="radio" />
      <label htmlFor="student">instructor</label>
      <input onChange={handleChnage} id='instructor' type="radio" />
      <label htmlFor="student">admin</label>
      <input onChange={handleChnage} id='admin' type="radio" />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}