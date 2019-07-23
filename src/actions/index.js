const galleryLoaded = (gallery) => {
   return {
       type: "GALLERY_LOADED",
       payload: gallery
   }
}
const bicycleDetailsLoaded = (details={}) => {
    return {
        type: "BICYCLE_DETAILS_LOADED",
        payload: details
    }
}
const newBicycleDetails = (bicycleId) => {
    return {
        type: "NEW_BICYCLE_DETAILS",
        payload: bicycleId
    }
}
const highwayLoaded = (highwaybicycles) => {
    return {
        type: "HIGHWAY_BICYCLES_LOADED",
        payload: highwaybicycles
    }
}
const bmxLoaded = (bmx) => {
    return {
        type: "BMX_LOADED",
        payload: bmx
    }
}
const mountainLoaded = (mountain) => {
    return {
        type: "MOUNTAIN_LOADED",
        payload: mountain
    }
}
const runLoaded = (runbikes) => {
    return {
        type: "RUN_BICYCLES_LOADED",
        payload: runbikes
    }
}
const foldingLoaded = (foldingbikes) => {
    return {
        type: "FOLDING_BICYCLES_LOADED",
        payload: foldingbikes
    }
}
const cruiseLoaded = (cruisebikes) => {
    return {
        type: "CRUISE_BICYCLES_LOADED",
        payload: cruisebikes
    }
}
const walkingLoaded = (walkingbikes) => {
    return {
        type: "WALKING_BICYCLES_LOADED",
        payload: walkingbikes
    }
}
const allBicyclesLoaded = (allBikes={}) => {
    return {
        type: "ALL_BICYCLES_LOADED",
        payload: allBikes
    }
}
const bicycleAddedToCart = (bikeId) => {
    return {
        type: "BICYCLE_ADDED_TO_CART",
        payload: bikeId
    }
}
const bicycleIncreaseInCart = (bikeId) => {
    return {
        type: "BICYCLE_INCREASE_IN_CART",
        payload: bikeId
    }
}
const bicycleDecreaseInCart = (bikeId) => {
    return {
        type: "BICYCLE_DECREASE_IN_CART",
        payload: bikeId
    }
}
const allBicyclesRemovedFromCart = (bikeId) => {
    return {
        type: "ALL_BICYCLES_REMOVED_FROM_CART",
        payload: bikeId
    }
}
const updateTotalPrice = () => {
    return {
        type: "UPDATE_TOTAL_PRICE",
        payload: 0
    }
}
const clearCart = () => {
    return {
        type: "CLEAR_CART",
        payload: ""
    }
}
const checkBicycleinCart = (id) => {
    return {
        type: "CHECK_BICYCLE_IN_CART",
        payload: id
    }
}
export {
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
    bicycleAddedToCart,
    updateTotalPrice,
    clearCart,
    bicycleIncreaseInCart,
    bicycleDecreaseInCart,
    allBicyclesRemovedFromCart,
    allBicyclesLoaded,
    checkBicycleinCart
    
}