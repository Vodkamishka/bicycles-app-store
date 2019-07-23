import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './main/main';
import Pages from './pages/pages';
import Cart from './cart';
import Toggle from './toggle';
import Panel from './panel';
import Menu from './main/menu';


import withBicyclestoreService from '../hoc';
import { connect } from 'react-redux';
import {
    galleryLoaded,
    bicycleDetailsLoaded,
    newBicycleDetails,
    highwayLoaded,
    bmxLoaded,
    mountainLoaded,
    runLoaded,
    foldingLoaded,
    cruiseLoaded,
    walkingLoaded,
    clearCart,
    bicycleAddedToCart,
    updateTotalPrice,
    bicycleIncreaseInCart,
    bicycleDecreaseInCart,
    allBicyclesRemovedFromCart,
    allBicyclesLoaded,
    checkBicycleinCart
} from '../../actions';
import compose from '../../utils';


class App extends Component {
    state = {
        toggle: false,
        ModalMenu: false,
        allBicycles: this.props.allBicycles,
        showDetails: true
    }

    componentDidMount() {

        if (this.state.allBicycles.length === 0) {
            const { bicyclestoreService } = this.props;
            const gallery = bicyclestoreService.getGallery();
            const details = bicyclestoreService.getDetailsBicycle();
            const highwaybicycles = bicyclestoreService.getHighway();
            const bmx = bicyclestoreService.getBMX();
            const mountain = bicyclestoreService.getMountain();
            const runbikes = bicyclestoreService.getRunBikes();
            const foldingbikes = bicyclestoreService.getFoldingBikes();
            const cruisebikes = bicyclestoreService.getCruiseBikes();
            const walkingbikes = bicyclestoreService.getWalkingBikes();

            const allBikes = [
                ...highwaybicycles,
                ...bmx,
                ...mountain,
                ...runbikes,
                ...foldingbikes,
                ...cruisebikes,
                ...walkingbikes
            ]

            this.props.galleryLoaded(gallery);
            this.props.bicycleDetailsLoaded(details);

            this.props.highwayLoaded(highwaybicycles);
            this.props.bmxLoaded(bmx);
            this.props.mountainLoaded(mountain);
            this.props.runLoaded(runbikes);
            this.props.foldingLoaded(foldingbikes);
            this.props.cruiseLoaded(cruisebikes);
            this.props.walkingLoaded(walkingbikes);

            this.props.allBicyclesLoaded(allBikes);

        }
    }
    onToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    changeMainPage = () => {
        this.setState({
            ModalMenu: !this.state.ModalMenu
        })
    }
    changeDetailsTrue = () => {
        this.setState({
            showDetails: true
        })
    }
    showDetailsFalse = () => {
        this.setState({
            showDetails: false
        })
    }
    
    render() {
        const {
            gallery,
            newBicycleDetails,
            cart,
            total,
            clearCart,
            bicycleAddedToCart,
            updateTotalPrice,
            bicycleIncreaseInCart,
            bicycleDecreaseInCart,
            allBicyclesRemovedFromCart,
            checkBicycleinCart,
            bicycleDetails,
            bmx,
            runbikes,
            mountain,
            cruisebikes,
            walkingbikes,
            foldingbikes,
            highwaybicycles,
            allBicycles
        } = this.props;
        const lengthAllBicycles = allBicycles.length;
        const { ModalMenu, toggle, showDetails } = this.state;
        const cartLength = cart.length;
        
        return (
            <Fragment>
                <Cart 
                cartLength={cartLength} 
                showDetailsFalse={this.showDetailsFalse}
                changeMainPage={this.changeMainPage} 
                onToggle={this.onToggle}
                ModalMenu={ModalMenu}
                />
                <Toggle
                    changeMainPage={this.changeMainPage}
                    onToggle={this.onToggle}
                    toggle={toggle}
                />

                <Panel 
                gallery={gallery} 
                showDetailsFalse={this.showDetailsFalse}
                changeMainPage={this.changeMainPage} 
                onToggle={this.onToggle}
                ModalMenu={ModalMenu}
                />
                {
                    ModalMenu ?

                        <Menu
                            gallery={gallery}
                            changeMainPage={this.changeMainPage}
                            onToggle={this.onToggle}
                            showDetailsFalse={this.showDetailsFalse}
                        />
                        :
                        <Switch>
                            <Route path='/bicycles-app-store' exact render={() => <Main gallery={gallery}
                                newBicycleDetails={newBicycleDetails}
                                allBicycles={allBicycles}
                                bicycleAddedToCart={bicycleAddedToCart}
                                showDetailsFalse={this.showDetailsFalse}
                                changeDetailsTrue={this.changeDetailsTrue}
                            />} />
                            <Route path='/pages' render={() => <Pages gallery={gallery}
                                newBicycleDetails={newBicycleDetails}
                                lengthAllBicycles={lengthAllBicycles}
                                bicycleAddedToCart={bicycleAddedToCart}
                                updateTotalPrice={updateTotalPrice}
                                bicycleDetails={bicycleDetails}
                                changeDetailsTrue={this.changeDetailsTrue}
                                showDetailsFalse={this.showDetailsFalse}
                                showDetails={showDetails}
                                bmx={bmx}
                                runbikes={runbikes}
                                mountain={mountain}
                                cruisebikes={cruisebikes}
                                walkingbikes={walkingbikes}
                                foldingbikes={foldingbikes}
                                highwaybicycles={highwaybicycles}
                                allBicycles={allBicycles}
                                total={total}
                                clearCart={clearCart}
                                bicycleIncreaseInCart={bicycleIncreaseInCart}
                                bicycleDecreaseInCart={bicycleDecreaseInCart}
                                allBicyclesRemovedFromCart={allBicyclesRemovedFromCart}
                                checkBicycleinCart={checkBicycleinCart}
                                cartLength={cartLength}
                                cart={cart}
                            />} />

                        </Switch>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        gallery: state.gallery,
        bicycleDetails: state.bicycleDetails,

        bmx: state.bmx,
        runbikes: state.runbikes,
        mountain: state.mountain,
        cruisebikes: state.cruisebikes,
        walkingbikes: state.walkingbikes,
        foldingbikes: state.foldingbikes,
        highwaybicycles: state.highwaybicycles,
        allBicycles: state.allBicycles,

        cart: state.cart,
        total: state.total,

    }
}

const mapDispatchToProps = {
    galleryLoaded,
    bicycleDetailsLoaded,
    newBicycleDetails,
    highwayLoaded,
    bmxLoaded,
    mountainLoaded,
    runLoaded,
    foldingLoaded,
    cruiseLoaded,
    walkingLoaded,
    clearCart,
    bicycleAddedToCart,
    updateTotalPrice,
    bicycleIncreaseInCart,
    bicycleDecreaseInCart,
    allBicyclesRemovedFromCart,
    allBicyclesLoaded,
    checkBicycleinCart
}

export default compose(
    withBicyclestoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(App);
