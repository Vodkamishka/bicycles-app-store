import React from 'react';
import './about.css';

export default function About() {
    return (
        <div className='about'>
            <div className=' container-fluid pl-5 ml-5'>
                <div className='row pt-3'>
                    <div className='col-9 col-md-6 col-lg-3'>
                        <div className="title">Наши контакты</div>
                        <div className="text">
                            <p><i className="fas fa-map-marker-alt"></i>  г. Томск, Российская Федерация </p>
                            <p><i className="fas fa-at"></i>  andrtomsk@narod.ru</p>
                            <p><i className="fas fa-mobile"></i>  +7-952-889-4122</p>
                            <p><i className="fab fa-skype"></i>  andrushafromtomsk</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
