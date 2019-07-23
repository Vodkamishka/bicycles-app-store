const initialState = {
    gallery: [],
    bicycleDetails: [],
    highwaybicycles: [],
    bmx: [],
    mountain: [],
    runbikes: [],
    foldingbikes: [],
    cruisebikes: [],
    walkingbikes: [],
    total: [],
    cart: [],
    allBicycles: []
}

const updateCart = (cart, newBike, bikeIndex) => {

    if (newBike.count === 0)
        return [
            ...cart.slice(0, bikeIndex),
            ...cart.slice(bikeIndex + 1)
        ]

    if (bikeIndex === -1) {
        return [
            ...cart,
            newBike
        ]
    }
    return [
        ...cart.slice(0, bikeIndex),
        newBike,
        ...cart.slice(bikeIndex + 1)
    ]
}

const updateBicycle = (selectBicycle, X) => {

    if (selectBicycle) {
        return {
            ...selectBicycle,
            count: selectBicycle.count + X,
            totalBicyclePrice: selectBicycle.price * (selectBicycle.count +X)
        }
    }
    else {
        return {
            ...selectBicycle
        }
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "GALLERY_LOADED":
            return {
                ...state,
                gallery: action.payload
            };
        case "BICYCLE_DETAILS_LOADED":
            return {
                ...state,
                bicycleDetails: action.payload
            };
        case "NEW_BICYCLE_DETAILS":
            const bicycleId = action.payload;
            const bicycle = state.allBicycles.find(el => el.id === bicycleId)
            return {
                ...state,
                bicycleDetails: bicycle
            }
        case "HIGHWAY_BICYCLES_LOADED":
            return {
                ...state,
                highwaybicycles: action.payload
            };
        case "BMX_LOADED":
            return {
                ...state,
                bmx: action.payload
            };
        case "MOUNTAIN_LOADED":
            return {
                ...state,
                mountain: action.payload
            };
        case "RUN_BICYCLES_LOADED":
            return {
                ...state,
                runbikes: action.payload
            };
        case "FOLDING_BICYCLES_LOADED":
            return {
                ...state,
                foldingbikes: action.payload
            };
        case "CRUISE_BICYCLES_LOADED":
            return {
                ...state,
                cruisebikes: action.payload
            };
        case "WALKING_BICYCLES_LOADED":
            return {
                ...state,
                walkingbikes: action.payload
            };
        case "ALL_BICYCLES_LOADED":
            return {
                ...state,
                allBicycles: action.payload
            };
        case "BICYCLE_ADDED_TO_CART":
            let bike = state.allBicycles.find(el => el.id === action.payload);
            let bikeIndex = state.cart.findIndex(el => el.id === action.payload);
            let allBikesIndex = state.allBicycles.findIndex(el => el.id === action.payload);
            if (bikeIndex === -1) {
                let newBike = {
                    ...bike,
                    inCart: true,
                    totalBicyclePrice: bike.price
                }
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        newBike
                    ],
                    allBicycles: [
                        ...state.allBicycles.slice(0,allBikesIndex),
                        newBike,
                        ...state.allBicycles.slice(allBikesIndex + 1),
                    ]
                }
            }
            else {
                return {
                    ...state
                }
            }
        case "BICYCLE_INCREASE_IN_CART":
            
            let bicycleIndex = state.cart.findIndex(el => el.id === action.payload);
            let selectBicycle = state.cart[bicycleIndex];
            let newBike = updateBicycle(selectBicycle, + 1);
            return {
                ...state,
                cart: updateCart(state.cart, newBike, bicycleIndex)
            }
        case "BICYCLE_DECREASE_IN_CART":
            const bicycleDecreaseIndex = state.cart.findIndex(el => el.id === action.payload);
            const selectDecreaseBicycle = state.cart[bicycleDecreaseIndex];
            const newDecreaseBike = updateBicycle(selectDecreaseBicycle, - 1);
            return {
                ...state,
                cart: updateCart(state.cart, newDecreaseBike, bicycleDecreaseIndex)
            }
        case "ALL_BICYCLES_REMOVED_FROM_CART":
            const bicyclesRemovedIndex = state.cart.findIndex(el => el.id === action.payload);
            const selectRemovedBicycles = state.cart[bicyclesRemovedIndex];
            let newRemovedBike = updateBicycle(selectRemovedBicycles, - selectRemovedBicycles.count);
            return {
                ...state,
                cart: updateCart(state.cart, newRemovedBike, bicyclesRemovedIndex)
            }
        case "UPDATE_TOTAL_PRICE":
            const countTotalPrice = (cart) => {
                let totalPrice = action.payload;
                cart.forEach(el => {
                    totalPrice += el.count * el.price;
                })
                return totalPrice;
            }
            return {
                ...state,
                total: countTotalPrice(state.cart)
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }
        case "CHECK_BICYCLE_IN_CART":
            const checkBike = state.allBicycles.find(el => el.id === action.payload);
            const checkBikeIndex = state.cart.findIndex(el => el.id === action.payload);
            const allBikesCheckIndex = state.allBicycles.findIndex(el => el.id === action.payload)
            if (checkBikeIndex === -1){
                let newBike = {
                    ...checkBike,
                    inCart: false
                }
                return {
                    ...state,
                    allBicycles: [
                        ...state.allBicycles.slice(0,allBikesCheckIndex),
                        newBike,
                        ...state.allBicycles.slice(allBikesCheckIndex + 1),
                    ]
                }
            }
            else {
                return {
                    ...state
                }
            }
        default: return state;
    }
}

export default reducer;