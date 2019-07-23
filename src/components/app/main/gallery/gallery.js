import React from 'react';
import './gallery.css';

import Image from './image';


export default function Gallery({gallery, showDetailsFalse}) {
  
  return (
    <div className="gallery">
      <div className="container-fluid ">
        <div className="row">
          {gallery.map(element => 
          
          <Image 
          key={element.id} 
          text={element.text} 
          path={element.path} 
          text2 = {element.text2} 
          link = {element.link}  
          showDetailsFalse={showDetailsFalse}
          />
          )}
        </div>
      </div>
    </div>
  )

}


