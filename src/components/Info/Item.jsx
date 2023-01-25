import React from 'react'
import './Item.css'

function Item(props) {
  return (
      <div className='item-container'>
        <div className='item-sm-container'>
          <h1 className='item-name'>{props.item}</h1>
          <h1 className='item-price'>${props.price}</h1>
        </div>
        <img src={props.url} className='item-img'/>
      </div>
  )
}

export default Item