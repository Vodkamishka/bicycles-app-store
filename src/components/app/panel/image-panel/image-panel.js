import React from 'react';
import './image-panel.css';

export default function ImagePanel({img, text}) {
  
  return (
    <div className = "block-panel">
      <div className = "block-panel-text">{text}</div>
      <img src = {img} alt ={text} />
      
    </div>
    
  )
}
