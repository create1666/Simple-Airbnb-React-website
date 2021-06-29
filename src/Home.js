import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'
import {cardObj1, cardObj2, cardObj3} from './Data'

const Home = () => {
  const {img, src, tittle} = cardObj1

  return (
    <div className='home'>
      <Banner/>
      <div>
        <Card img ={img} src ={src} title={tittle}/>
        <Card {...cardObj2}/>
        <Card {...cardObj3}/>
      </div>

      <div>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>
  )
}

export default Home
