import React from 'react'
import BicyclesModuleProduct from './bicycles-module-product/bicycles-module-product';

export default function BicyclesModule({propsModule, newBicycleDetails, bicycleAddedToCart, updateTotalPrice, title, component, changeDetailsTrue, changeBicycleDetails}) {
  return (
    <div className ="col-9 col-md-6 col-lg-6"> 
    <div className = "container module">
    <div className = 'row m-3 title '>{title}</div>
    <div className = 'row'>
    
   
    {propsModule.map(el => <BicyclesModuleProduct 
    key = {el.id + 8888}
    img = {el.path} 
    name = {el.name}
    price = {el.price}
    id = {el.id}
    newBicycleDetails = {newBicycleDetails}
    bicycleAddedToCart={bicycleAddedToCart}
    updateTotalPrice={updateTotalPrice}
    component={component}
    changeDetailsTrue={changeDetailsTrue}
    changeBicycleDetails={changeBicycleDetails}
    /> )}
    </div>
    </div> 
    </div>
  )
}
