import React, { Component } from 'react';
import './details-right.css';


export default class DetailsRight extends Component {
  state = {
    incart: false
  }
  componentDidUpdate(prevProps){
    if (this.props.details.id !== prevProps.details.id){
      this.setState({
        incart: false
      })
    }
  }
  changeStateInCart = () => {
    this.setState({
      incart: true
    })
  }
 
  render() {

    const { incart } = this.state;
    const {
      path,
      id,
      name,
      brend,
      frame,
      series,
      year,
      sex,
      age,
      price,
      guarantee,
      size,
      description,
      inCart } = this.props.details;
     
      
    const { bicycleAddedToCart, updateTotalPrice } = this.props;
    
    const styleButton = {
      background: inCart || incart ? 'red' : "steelblue",
      color: inCart || incart ? 'white' : "black",
    }
   
    
    return (

      <div className="col-9 col-md-6 col-lg-8 ">
        <div className="details-right">
          <div className="details-right-big-picture">
            <img src={path} alt={name} />
          </div>
          <div className="details-right-description-bicycle mb-5">


            <button className="mb-3"
              style = { styleButton }
              disabled={inCart || incart ? true : false}
              onClick={
                () => {
                  bicycleAddedToCart(id)
                  updateTotalPrice()
                  this.changeStateInCart()
                }
              }
            >
              {inCart || incart ? 'Товар в корзине' : 'Добавить в корзину'}</button>
            
            

            <div><em>модель:</em> <span className="font-weight-bold"> {name}</span> </div>
            <div><em>бренд:</em><span className="font-weight-bold"> {brend}</span> </div>
            <div><em>материал рамы:</em><span className="font-weight-bold"> {frame}</span> </div>
            <div><em>тип велосипеда:</em><span className="font-weight-bold"> {series}</span> </div>
            <div><em>год выпуска:</em><span className="font-weight-bold"> {year}</span> </div>
            <div><em>пол:</em><span className="font-weight-bold"> {sex}</span> </div>
            <div><em>возраст</em><span className="font-weight-bold"> {age}</span> </div>
            <div><em>цена:</em><span className="font-weight-bold"> {price} руб.</span> </div>
            <div><em>гарантия на раму:</em><span className="font-weight-bold"> {guarantee}</span> </div>
            <div><em>размер колес:</em><span className="font-weight-bold"> {size}</span> </div>
            <div><em>описание:</em><span className="font-weight-bold"> {description}</span> </div>

          </div>
        </div>
      </div>

    )
  }
}