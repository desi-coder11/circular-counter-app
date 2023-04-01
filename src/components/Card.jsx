import React from 'react'
import handwash from '../images/handwash.png'

const Card = () => {
  return (
    
<div class="card">
  <div class="card-header">
  Step <span className="dark-color">2</span>/<span className="light-color">3</span>
  </div>
  
  
  <div class="card-body">
  
    <h4 class="card-title">Cleansing</h4>
    <p class="card-text" >🕔 60 sec </p>
  </div>
  <div class="card-footer">
    How to do
  </div>
  <img src={handwash} className="icon" alt="Your Image" />


</div>
    
  )
}

export default Card