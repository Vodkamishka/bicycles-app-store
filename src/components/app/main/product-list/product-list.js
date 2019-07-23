import React, {Component} from 'react';
import './product-list.css';
import ProductItem from './product-item';


export default class ProductList extends Component {
  
  render(){
    const {newBicycleDetails, bicycleAddedToCart, allBicycles, changeDetailsTrue } = this.props;
    let random = Math.floor(Math.random()*6) + 1;
    
    let typeBicycle;
    switch(random){
      case 1: typeBicycle = 'шоссейный велосипед'; break;
      case 2: typeBicycle = 'велосипед BMX'; break;
      case 3: typeBicycle = 'горный велосипед'; break;
      case 4: typeBicycle = 'велосипед беговел'; break;
      case 5: typeBicycle = 'велосипед складной'; break;
      case 6: typeBicycle = 'круизный велосипед'; break;
      default: typeBicycle = 'прогулочный велосипед'
    }
  return (
    <div className="product-list">
      <div className="container ">
        <div className="row">
          {allBicycles.map(el => {
            if (el.series === typeBicycle){
             return <ProductItem 
             key={el.id + 333} 
             img={el.path} 
             alt={el.name} 
             name={el.name} 
             price={el.price}
             id = {el.id} 
             newBicycleDetails={newBicycleDetails}
             bicycleAddedToCart={bicycleAddedToCart}
             changeDetailsTrue={changeDetailsTrue}
            />}
           else {
            return null
           }
          })}
        </div>
      </div>

    </div>
  )
}
}