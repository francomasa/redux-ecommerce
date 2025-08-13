import cartActionType from "./action-types"

const initialState = {
    products: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionType.ADD_PRODUCT:
            return;
        
        case cartActionType.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload)
            };

        case cartActionType.INCREMENT_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) => (product.id === action.payload) 
                ? {...product, quantity: product.quantity + 1 } 
                : product)
            };

        case cartActionType.DECREASE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) => (product.id === action.payload) 
                ? {...product, quantity: product.quantity - 1 } 
                : product).filter(product => product.quantity > 0),
            };
        default:
            return state;
    }
}

export default cartReducer