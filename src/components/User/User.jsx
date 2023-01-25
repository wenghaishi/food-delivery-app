import React from 'react'
import './User.css'


function User() {
  return (
    <div className='user-container'>
        <div className='user-main'>
          <h1>User settings</h1>
          <button className='button-1'>Change password</button>
          <button className='button-1'>Change address</button>
          <button className='button-1'>Change Email</button>
        </div>
    </div>
  )
}

export default User