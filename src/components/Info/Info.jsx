import React from 'react'
import {useParams} from "react-router-dom"
import './Info.css'
import Sidebar from './Sidebar'
import Item from './Item'

function Info(props) {

  const {restId} = useParams()

  const thisRest = props.rest.find((r) => r.id === restId)

  return (
    <div className='info-big-container'>
      <div className='info-m-container '>
        <div className='info-menu-container'>
          <img src={thisRest.url} className='info-img'/>
          <h1 className='info-restname'>{thisRest.RestName}</h1>
          <div className='item-container-big'>
          {thisRest.item.map((item) => (<Item price={item.price} rest={thisRest} item={item.item} url={item.url} id={item.itemId}/>))}
          </div>
        </div>
        <Sidebar rest={thisRest}/>
      </div>
    </div>
  )
}

export default Info