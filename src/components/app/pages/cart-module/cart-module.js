import React, { Component } from 'react';
import './cart-module.css';
import BicycleInCart from './bicycle-in-cart';

export default class CartModule extends Component {
  render() {
    const {
      cart,
      cartLength,
      total,
      clearCart,
      newBicycleDetails,
      bicycleAddedToCart,
      updateTotalPrice,
      bicycleIncreaseInCart,
      bicycleDecreaseInCart,
      allBicyclesRemovedFromCart,
      checkBicycleinCart,
      changeDetailsTrue
    } = this.props;
    if (cartLength === 0)
      return (
        <div className="col-9 col-md-6 col-lg-8 shopping-cart">
          <div className="container">
            <div className="row shop m-5">
              <div><i className="fas fa-gifts"></i></div>
              <div>/ Корзина покупок</div>
            </div>
            <div className="row empty">Ваша корзина покупок пуста</div>
          </div>
        </div>
      )

    return (
      <div className="col-9 col-md-6 col-lg-8 shopping-cart">
        <div className="container">
          <div className="row shop m-5">
            <div><i className="fas fa-gifts"></i></div>
            <div>/ Корзина покупок</div>
          </div>
          <div className="row ">
            <div className="col-9 col-md-6 col-lg-2 text-center">Велосипед</div>
            <div className="col-9 col-md-6 col-lg-2 text-center">Тип велосипеда</div>
            <div className="col-9 col-md-6 col-lg-2 text-center">Название</div>
            <div className="col-9 col-md-6 col-lg-2 text-center">Цена</div>
            <div className="col-9 col-md-6 col-lg-2 text-center">Количество</div>
            <div className="col-9 col-md-6 col-lg-1 text-center">Удалить</div>
          </div>
          {cart.map(el => <BicycleInCart
            key={el.id+ 67890}
            name={el.name}
            totalBicyclePrice={el.totalBicyclePrice}
            count={el.count}
            src={el.path}
            type={el.series}
            id={el.id}
            newBicycleDetails={newBicycleDetails}
            bicycleAddedToCart={bicycleAddedToCart}
            updateTotalPrice={updateTotalPrice}
            bicycleIncreaseInCart={bicycleIncreaseInCart}
            bicycleDecreaseInCart={bicycleDecreaseInCart}
            allBicyclesRemovedFromCart={allBicyclesRemovedFromCart}
            checkBicycleinCart={checkBicycleinCart}
            changeDetailsTrue={changeDetailsTrue}
          />)}

          <div className="row mt-5 ">
            <div>Итоговая стоимость: <span className="font-weight-bold"> {total} руб.</span></div>
          </div>
          <div className="row mt-3 ">
            <div className="cart-button"
              onClick={clearCart}
            >Очистить корзину </div>
          </div>
        </div>

      </div>
    )
  }
}
