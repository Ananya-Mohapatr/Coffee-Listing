import React from 'react'
import './MainWebComponent.css'
import bgImg from '../assets/bg-cafe.jpg'
import CoffeeListComponent from './CoffeeListComponent'
const mainWebComponent = () => {
  return (
    <div style={{backgroundColor:'black',height:'100vh'}}>
        <img src={bgImg} className='bgImg' alt='background'/>
        <CoffeeListComponent/>
    </div>
  )
}

export default mainWebComponent