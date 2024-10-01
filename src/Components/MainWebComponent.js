import React from 'react'
import './MainWebComponent.css'
import bgImg from '../assets/bg-cafe.jpg'
const mainWebComponent = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <img src={bgImg} className='bgImg' alt='background'/>
    </div>
  )
}

export default mainWebComponent