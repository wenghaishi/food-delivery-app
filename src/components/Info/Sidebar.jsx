import React from 'react'
import './Sidebar.css'

function Sidebar(props) {
  return (
    <div className='sidebar'>
        <div>
            <h1>Your cart</h1>
            <div className='cart-container'>

            </div>
        </div>
        <div className='checkout-container'>
            <p>Subtotal:</p>
            <button className='button-2'>Checkout</button>
        </div>
    </div>
  )
}

export default Sidebar