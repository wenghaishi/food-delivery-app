import React from 'react'
import './User.css'


function User() {
  return (
    <div className='user-container'>
        <div className='user-main'>
          <h1>User settings</h1>
          <button className='user-button'>Change password</button>
          <button className='user-button'>Change address</button>
          <button className='user-button'>Change Email</button>
        </div>
    </div>
  )
}

export default User