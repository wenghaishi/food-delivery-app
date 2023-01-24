import React, { useState } from 'react'
import './Login.css'

function Login() {

    const [email , setEmail] = useState()
    const [passwordf, SetPassword] = useState()

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

  return (
    <div className='form'>
        <form onSubmit={submitHandler}>
            <label> email</label>
                <input type='text' onChange={emailHandler}/>
            <label>Password</label>
                <input type='text'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login