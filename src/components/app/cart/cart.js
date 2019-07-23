import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';

export default function Cart({showDetailsFalse, cartLength, changeMainPage, onToggle, ModalMenu}) {
    return (
        <Link to="/pages/cart"
        onClick = {
            () => {
                showDetailsFalse();
                if (ModalMenu){
                    changeMainPage()
                    onToggle()
                }
            }
        }
        >
        <div className="cart">
            
                <div className='left'>
                    <i className="fas fa-shopping-basket"></i>
                </div>
                <div className='right'>
                    <em>Корзина ({cartLength})</em>
                </div>
            
        </div>
        </Link>
    )
}
