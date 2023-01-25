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
            <h1 className='login-title'>Get your favorite food delivered!</h1>
            <label className='label'> Email</label>
                <input className='input' type='text' onChange={emailHandler}/>
            <label className='label'>Password</label>
                <input className='input' type='text'onChange={passwordHandler}/>
            <button type='submit' className='button-1'>Login</button>
            <button className='button-1'>Sign up</button>
        </form>

    </div>
  )
}

export default Login