import React from 'react'
import './Item.css'
import {useParams} from "react-router-dom"


function Item(props) {

  const {itemId} = useParams()
  const thisItem = props.rest.item.find((r) => r.id === itemId)

    const addItemHandler = (e) => {
      console.log(e.target.value)
    }
  return (
      <div className='item-container'>
        <div className='item-sm-container'>
          <h1 className='item-name'>{props.item}</h1>
          <h1 className='item-price'>${props.price}</h1>
          <button className='button-2'>Add to cart</button>
        </div>
        <img src={props.url} className='item-img' onClick={addItemHandler}/>
      </div>
  )
}

export default Item