import React from 'react'
import './Card.css'
import { AiFillStar } from 'react-icons/ai';


function Card(props) {
  return (
    <div className='card'>
      <img className='img' src={props.url}></img>
      <div className='breed'>
        <h1 className='name'>{props.title}</h1>
        <div className='rating-container'>
        <h1 className='breed-age'>{props.rating}</h1>
          <AiFillStar className='star'/>
          <h1 className='review'> ({props.review})</h1>
        </div>
      </div>
      <h1 className='fee'> Delivery fee: {props.fee}</h1>
      <p className='description'>{props.description}</p>
    </div>
  )
}

export default Card
