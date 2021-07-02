import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'
import {cardObj1, cardObj2, cardObj3, cardObj4, cardObj5, cardObj6} from './Data'

const Home = () => {
 
  const {img,  title, description, price} = cardObj1
  const {img:img2,  title:title1} = cardObj2
  const {img:img3,  title:title2} = cardObj3
  const {img:img4,  title:title3} = cardObj4
  const {img:img5,  title:title4} = cardObj5
  const {img:img6,  title:title5} = cardObj6
  
 

  return (
    <div className='home'>
      <Banner/>
      <div className='home__section'>
        <Card src ={img} title={title} description ={description} />
        <Card src ={img2} title={title1} description ={description}/>
        <Card src ={img3} title={title2} description ={description}/>
      </div>

      <div className='home__section'>
        <Card src ={img4} title={title3} description ={description} price={price}/>
        <Card src ={img5} title={title4} description ={description} price={price}/>
        <Card src ={img6} title={title5} description ={description} price={price}/>
      </div>

    </div>
  )
}

export default Home
