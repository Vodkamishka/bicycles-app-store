import React from 'react';
import './bicycle-in-cart.css';
import { Link } from 'react-router-dom';

export default function BicycleInCart({name, totalBicyclePrice, count, src, type, id, newBicycleDetails, updateTotalPrice, bicycleIncreaseInCart, bicycleDecreaseInCart,  allBicyclesRemovedFromCart, checkBicycleinCart, changeDetailsTrue}) {
  return (
    <div className = "row bicycle-in-cart mt-4 mb-5">
     <div className = "col-9 col-md-6 col-lg-2 in-cart-image mb-5 ">
     <Link to="/pages">
     <img src={src} alt={name} 
     onClick={()=> {
       newBicycleDetails(id)
       changeDetailsTrue()
      }}
     />
     </Link>
     </div>
     <div className = "col-9 col-md-6 col-lg-2">{type} </div>
     <div className = "col-9 col-md-6 col-lg-2   ">{name}</div>
     <div className = "col-9 col-md-6 col-lg-2 ">{totalBicyclePrice} руб.</div>
     <div className = "col-9 col-md-6 col-lg-2  ">
     <div className = "m-1 arifmethic"
     onClick = {()=>{
      
      bicycleIncreaseInCart(id)
      updateTotalPrice(id)
      
     }}
     ><i className="fas fa-plus"></i></div>
     <div className = " arifmethic">{count}</div> 
     <div className = "m-1  arifmethic"
     onClick = {
      ()=>{
        bicycleDecreaseInCart(id) 
        updateTotalPrice(id)
        checkBicycleinCart(id) 
     }}
     ><i className="fas fa-minus"></i></div>
      </div>
     <div className = "col-9 col-md-6 col-lg-1 ">
     <i className = "fas fa-trash "
     onClick = {
      ()=> {
       allBicyclesRemovedFromCart(id);
       updateTotalPrice(id);
       checkBicycleinCart(id);
      }
    }
     ></i></div>
    </div>
  )
}
