import React, { useState } from 'react'
import './Login.css'

function Login(props) {

    const [email , setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = (e) => {
        e.preventDefault()
        props.login()
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

  return (
    <div className='login-container'>
        <form onSubmit={submitHandler} className='login-form'>
            <h1>Get your favorite food delivered!</h1>
            <label className='label'> email</label>
                <input className='input' type='text' onChange={emailHandler}/>
            <label className='label'>Password</label>
                <input className='input' type='text'onChange={passwordHandler}/>
            <button type='submit' className='login-button'>Login</button>
        </form>
    </div>
  )
}

export default Login