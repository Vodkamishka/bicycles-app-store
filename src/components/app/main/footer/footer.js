import React from 'react';
import './footer.css';

export default function Footer() {
 
  return (
    <div className = "container-fluid footer pt-2 pb-2 font-weight-bold">
    <div className = "row">
    <div className = "col-9 col-md-9 col-lg-9">

      Create by Deynega Andrey | May 2019 | Powered by React & Redux
     
      </div>
      <div className = "col-9 col-md-3  col-lg-3 text-right">
  
     <a href='https://vk.com/id50707475' rel="noopener noreferrer" target="_blank"><i className="fab fa-vk" ></i> </a> 
     <a href='https://www.facebook.com/andrey.deynega' rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-square" ></i> </a> 
     <a href='https://www.facebook.com/andrey.deynega' rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram" ></i> </a> 
     <a href='https://github.com/Vodkamishka' rel="noopener noreferrer" target="_blank"><i className="fab fa-github" ></i> </a> 
      
      </div>
    </div>
    </div>
  )
}
