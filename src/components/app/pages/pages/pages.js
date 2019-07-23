import React, { Component, Fragment } from 'react'
import DetailsLeft from '../details-left';
import { Route, Switch } from 'react-router-dom';
import DetailsRight from '../details-right';

import "./pages.css";
import BicyclesModule from '../bicycles-module';
import CartModule from '../cart-module';

export default class Pages extends Component {

  state = {
    bicycleDetails: this.props.bicycleDetails
  }
  changeBicycleDetails = (x = this.props.bicycleDetails) => {
    this.setState({
      bicycleDetails: x
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.bicycleDetails !== this.props.bicycleDetails){
    this.changeBicycleDetails(this.props.bicycleDetails)
    }
  }
  render() {
    const {
      gallery,
      newBicycleDetails,
      lengthAllBicycles,
      bicycleAddedToCart,
      updateTotalPrice,
      changeDetailsTrue,
      showDetailsFalse,
      showDetails,

      bmx,
      runbikes,
      mountain,
      cruisebikes,
      walkingbikes,
      foldingbikes,
      highwaybicycles,
      allBicycles,

      cartLength,
      cart,
      total,
      clearCart,
      bicycleIncreaseInCart,
      bicycleDecreaseInCart,
      allBicyclesRemovedFromCart,
      checkBicycleinCart
    } = this.props;
    const { bicycleDetails } = this.state;
    

    const returnBicyclesModule = (path, propsModule, component, title) => {
      return (
        <Route path={path} render={() => <BicyclesModule
          newBicycleDetails={newBicycleDetails}
          propsModule={propsModule}
          bicycleAddedToCart={bicycleAddedToCart}
          updateTotalPrice={updateTotalPrice}
          component={component}
          title={title}
          changeDetailsTrue={changeDetailsTrue}
          changeBicycleDetails={this.changeBicycleDetails}
        />} />
      )
    }
    return (
      <Fragment>
        <div className="details">
          <div className="container-fluid">
            <div className="row">
              <DetailsLeft
                gallery={gallery}
                allBicycles={allBicycles}
                newBicycleDetails={newBicycleDetails}
                lengthAllBicycles={lengthAllBicycles}
                changeDetailsTrue={changeDetailsTrue}
                showDetailsFalse={showDetailsFalse}
                changeBicycleDetails={this.changeBicycleDetails}
              />

              {showDetails ? <DetailsRight details={bicycleDetails}
                bicycleAddedToCart={bicycleAddedToCart}
                updateTotalPrice={updateTotalPrice}
              /> :

                <Switch>

                  {returnBicyclesModule('/pages/bmx', bmx, 'bmx', 'Велосипеды BMX')}
                  {returnBicyclesModule('/pages/runbikes', runbikes, 'runbikes', 'Bелосипеды беговелы')}
                  {returnBicyclesModule('/pages/mountain', mountain, 'mountain', 'Горные велосипеды')}
                  {returnBicyclesModule('/pages/cruisebikes', cruisebikes, 'cruisebikes', 'Круизные велосипеды')}
                  {returnBicyclesModule('/pages/walkingbikes', walkingbikes, 'walkingbikes', 'Прогулочные велосипеды')}
                  {returnBicyclesModule('/pages/foldingbicycles', foldingbikes, 'foldingbicycles', 'Складные велосипеды')}
                  {returnBicyclesModule('/pages/highway', highwaybicycles, 'highway', 'Шоссейные велосипеды')}
                  {returnBicyclesModule('/pages/allbicycles', allBicycles, 'allbicycles', 'Велосипеды')}

                  <Route path='/pages/cart' render={() => <CartModule
                    cartLength={cartLength}
                    cart={cart}
                    total={total}
                    clearCart={clearCart}
                    newBicycleDetails={newBicycleDetails}
                    bicycleAddedToCart={bicycleAddedToCart}
                    updateTotalPrice={updateTotalPrice}
                    bicycleIncreaseInCart={bicycleIncreaseInCart}
                    bicycleDecreaseInCart={bicycleDecreaseInCart}
                    allBicyclesRemovedFromCart={allBicyclesRemovedFromCart}
                    checkBicycleinCart={checkBicycleinCart}
                    changeDetailsTrue={changeDetailsTrue}
                  />}
                  />
                </Switch>
              }
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}