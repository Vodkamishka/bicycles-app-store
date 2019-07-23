import React from 'react';
import './details-menu.css';
import Detailslist from './details-list';
import { Link } from 'react-router-dom';

export default function DetailsMenu({gallery, showDetailsFalse}) {
  return (
    <div className = "details-menu">
    
      <div className = "details-frame-menu">
      <ul>
          <li className = "category">Категории</li>
          <Link to ="/bicycles-app-store">
          <li>Главная страница</li>
          </Link>
          {gallery.map(el =>
            <Link key = {el.id+111111} to = {el.link}>
            <Detailslist 
            key = {el.id+4444} 
            text= {el.text} 
            showDetailsFalse = {showDetailsFalse }
            />
            </Link>
            )}
          
      
      </ul>
     </div>
    </div>
  )
}
