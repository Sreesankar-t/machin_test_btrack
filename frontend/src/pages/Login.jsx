import React, { useState } from 'react'

export default function Login() { 
    const [data, setData] = useState({
        email:"",
        password:""
    })
  return (
    <div>
        <h3>Student Login</h3>
      <input id='email' type="text" name="" placeholder='enter the email' />
      <input id='password' type="text" name="" placeholder='enter the paswword' />
      <button>submit</button>
    </div>
  )
}
