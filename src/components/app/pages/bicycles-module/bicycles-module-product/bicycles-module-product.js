import React, { Component } from 'react';
import './bicycles-module-product.css';
import { Link} from 'react-router-dom';

export default class BicyclesModuleProduct extends Component {
    state = {
        fas: false
    }
    changeFasOpacity = () => {
        this.setState({
            fas: !this.state.fas
        })
    }
    render() {
        const { 
            img, 
            name, 
            price, 
            id,
            newBicycleDetails, 
            bicycleAddedToCart,  
            updateTotalPrice, 
            component, 
            changeDetailsTrue,
            changeBicycleDetails
         } = this.props;
        const fasStyle = { opacity: this.state.fas ? '1' : '0' }
        return (
            <div className="col-9 col-md-6  col-lg-4 ">
                
                <div className="module-card"
                    onMouseEnter={this.changeFasOpacity}
                    onMouseLeave={this.changeFasOpacity}
                >

                    <div className="module-card-image p-2">
                       
                        <img src={img} alt={name} />

                    </div>
                    <div className="module-card-footer text-center font-weight-bold">

                        <div className="name">{name}</div>
                        <div>{price} руб.</div>

                    </div>
                    <div className="module-fas-collection">
                            <Link to={component}>
                            <i className="fas fa-cart-plus"
                            style={fasStyle} 
                            title="Добавить в корзину"
                            onClick ={()=>{
                                bicycleAddedToCart(id);
                                updateTotalPrice()
                            }}
                            ></i>
                            </Link>
                            <Link to='/pages'>
                            <i className="fas fa-search-plus" 
                            style={fasStyle} 
                            title="Посмотреть велосипед"
                            onClick = {() => {
                                    let promise = new Promise(resolve=> {
                                        newBicycleDetails(id)
                                        resolve()
                                    })
                                    promise.then(()=>{
                                        changeDetailsTrue()
                                        changeBicycleDetails()
                                    })   
                            }}
                            ></i>
                            </Link>
                        </div>

                </div>
                
            </div>
        )
    }
}
