import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login/Login'
import Card from './components/Card'
import {  Link, Routes, Route } from "react-router-dom";
import User from './components/User/User.jsx'
import Basket from './components/Basket/Basket'


const restuarant = [
  {
    RestName: 'KFC',
    rating: '4.4',
    url: 'https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/600px-KFC_logo.svg.png?20170615210441',
    reviewNo: '456',
    deliveryFee: '$4.99',
    description: "Delicious fried chicken.",
    id: 1,
    type: 'western fastfood',
  },
  {
    RestName: 'Baskin Robbins',
    rating: '4.3',
    url: 'https://www.wogi.sg/uploads/brands/328/large_image.jpg',
    reviewNo: '78',
    deliveryFee: '$4.99',
    description: "Ice cream for the family. ",
    id: 2,
    type: 'western dessert'
  },
  {
    RestName: 'CUT by Wolfgang Puck',
    rating: '4.7',
    url: 'https://1.bp.blogspot.com/-z2zhb2yv7ac/X3bQLBokDXI/AAAAAAAAVkY/tLQYtzrDNmkXmFHtp7wX91a-CeFk7wUtQCPcBGAsYHg/w640-h480/DSC09764.jpg',
    reviewNo: '61',
    deliveryFee: '$8.99',
    description: "Award winning steakhouse by celebrity chef Wolfgang Puck.",
    id: 3,
    type: 'steak western'
  },
  {
    RestName: 'Lim Kee Chicken Rice',
    rating: '4.4',
    url: 'https://redhousespice.com/wp-content/uploads/2022/06/chicken-pieces-with-steamed-rice-1365x2048.jpg',
    reviewNo: '102',
    deliveryFee: '$6.99',
    description: "Great tender chicken rice.",
    id: 4,
    type: 'chicken asian'
  },
  {
    RestName: 'Fusion curry hut',
    rating: '4.5',
    url: 'https://savorjapan.com/gg/content_image/tokyo-indian_hero.jpg',
    reviewNo: '46',
    deliveryFee: '$4.99',
    description: "Hot, spicy indian cuisine.",
    id: 5,
    type: 'indian spicy asian'
  },
  {
    RestName: 'kiko japanese food',
    rating: '4.2',
    url: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956',
    reviewNo: '22',
    deliveryFee: '$4.99',
    description: "Sushi, ramen and bento.",
    id: 6,
    type: 'japanese sushi asian'
  },
  {
    RestName: 'ChongQing hotpot',
    rating: '4.6',
    url: 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/01/Imperial-Treasure-Steamboat-Restaurant-Steamboat-Singapore.png',
    reviewNo: '231',
    deliveryFee: '$9.99',
    description: "Hotpot for the family.",
    id: 7,
    type:" hotpot asian"
  },
  {
    RestName: 'Ichi ramen',
    rating: '4.6',
    url: 'https://www.seriouseats.com/thmb/IBikLAGkkP2QVaF3vLIk_LeNqHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rich-and-creamy-tonkotsu-ramen-broth-from-scratch-recipe-Diana-Chistruga-hero-6d318fadcca64cc9ac3e1c40fc7682fb.JPG',
    reviewNo: '201',
    deliveryFee: '$5.99',
    description: "Delicious ramen with bone broth and Char siew.",
    id: 8,
    type:" japanese asian ramen"
  },
  {
    RestName: 'Fried Chicken',
    rating: '4.2',
    url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.406.406.suffix/1568222255998.jpeg',
    reviewNo: '2',
    deliveryFee: '$5.99',
    description: "Famous fried chicken with delicious sides.",
    id: 9,
    type:"western chicken "
  },
  {
    RestName: 'Kim K-BBQ',
    rating: '4.3',
    url: 'https://www.allrecipes.com/thmb/z_eZq4UxcfrRjn0M1vZj-8pS4CI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/141268-KoreanBBQGalbi-ddmfs-4X3-0566-95426db597ae4191b9f9e527c743cf53.jpg',
    reviewNo: '87',
    deliveryFee: '$5.99',
    description: "Beef shortribs, pork belly slices, prawns and marinated chicken.",
    id: 10,
    type:"asian bbq "
  },
  {
    RestName: 'Ming Kee Chicken Rice',
    rating: '4.5',
    url: 'https://www.vforveganista.com/wp-content/uploads/2020/11/hero2-edited-14-1170x650.jpg',
    reviewNo: '55',
    deliveryFee: 'Free',
    description: "Tender and delicious steamed and roasted chicken rice.",
    id: 11,
    type:"asian chicken "
  },
  {
    RestName: 'Pizza',
    rating: '4.3',
    url: 'https://allabout.city/singapore/wp-content/uploads/2020/07/Italian-Restaurants-in-Singapore.jpg',
    reviewNo: '90',
    deliveryFee: 'Free',
    description: "pizza pasta western",
    id: 12,
    type:"western italian pizza "
  },
]

function App() {


  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedIn')

    if (storedUser === '1') {
      setLoggedIn(true)
    }
  
  })

  const logoutHandler = () => {
    localStorage.removeItem('loggedIn'); 
    setLoggedIn(false)
  }


  const loginHandler = () => {
    localStorage.setItem('loggedIn' , '1')
    setLoggedIn(true)
  }
  

  return (
    <>
    <Header logout={logoutHandler} loggedIn={loggedIn}/>
    <Routes>
        <Route path='/' element={<>
            {loggedIn === false && <Login login={loginHandler}/>}
            {
                loggedIn === true &&
                <div className='container1'>
                <div className='grid'>
                {restuarant.map((restuarant) => (<Card title={restuarant.RestName} rating={restuarant.rating} 
                review={restuarant.reviewNo} fee={restuarant.deliveryFee} url={restuarant.url} 
                description={restuarant.description} key={restuarant.id}/>))}
                </div>
            </div>
            }</>}
        />
        <Route path='/user' element={<User/>}/>
        <Route path='basket' element={<Basket/>}/>
      </Routes>
    </>

  )
}

export default App
