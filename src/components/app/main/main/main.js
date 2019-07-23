import React, { Fragment } from 'react';

import Paralax from '../paralax/paralax';
import Block from '../block';
import Gallery from '../gallery';
import ProductList from '../product-list';
import About from '../about';
import Footer from '../footer';

export default function Main({gallery, newBicycleDetails, bicycleAddedToCart, allBicycles, showDetailsFalse, changeDetailsTrue }) {
 
    return (
      <Fragment>
        
        <Paralax  />
        <Block />
        <Gallery 
        gallery = {gallery}
        showDetailsFalse = {showDetailsFalse}
        />
        <ProductList 
        newBicycleDetails={newBicycleDetails}
        bicycleAddedToCart={bicycleAddedToCart}
        allBicycles={allBicycles}
        changeDetailsTrue={changeDetailsTrue}
        />
        <About />
        <Footer />
         
      </Fragment>
    )
  }





