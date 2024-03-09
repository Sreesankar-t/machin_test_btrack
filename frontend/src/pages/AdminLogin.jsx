

import React, { useState } from 'react'

export default function AdminLogin() { 
    const [data, setData] = useState({
        email:"",
        password:""
    })
  return (
    <div>
        <h3>Admin Login</h3>
      <input id='email' type="text" name="" placeholder='enter the email' />
      <input id='password' type="text" name="" placeholder='enter the paswword' />
      <button>submit</button>
    </div>
  )
}