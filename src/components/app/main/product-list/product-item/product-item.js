import React, { Component } from 'react';
import './product-item.css';
import { Link } from 'react-router-dom';


export default class ProductItem extends Component {
  state = {
    cover: false
  }
  changeCover = () => {
    this.setState({
      cover: !this.state.cover
    })
  }
  render() {
    const { cover } = this.state;
    const { id, img, alt, name, price, newBicycleDetails, bicycleAddedToCart, changeDetailsTrue } = this.props;
    const styleCover = { transform: cover ? 'translateY(0%)' : 'translateY(100%)' }
    
    return (

      <div className="col-9 col-md-6  col-lg-3 ">
        <div className="card"
          onMouseEnter={this.changeCover}
          onMouseLeave={this.changeCover}
        >
          <div className="card-image p-2">
            <img src={img} alt={alt} />
          </div>
          <div className="card-footer text-center font-weight-bold">
            <p>{name}</p>
            <p>{price} <i className="fas fa-ruble-sign"></i></p>
          </div>
          <div className="cover" style={styleCover}>
            <div className="fas-collection">
              <Link to="/pages"
              onClick = {() => {
                newBicycleDetails(id)
                changeDetailsTrue()
                }}>
                <i className="fas fa-paw" title="Посмотреть велосипед"
                  
                ></i>
              </Link>
              <Link to="/pages">
              <i className="fas fa-cart-plus" title="Добавить в корзину"
              onClick = {
                () => {
                  bicycleAddedToCart(id)
                  newBicycleDetails(id)
                  changeDetailsTrue()
                }
              }
              ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

    )
  }
}



