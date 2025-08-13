import cartActionType from "./action-types"

const initialState = {
    products: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionType.ADD_PRODUCT:
            //verificar se o producto ja esta mo carrinho
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
                );
            //se o produto ja estiver aumenta a quantidade em 1
            if(productIsAlreadyInCart){
                return {
                    ...state, 
                    products: state.products.map((product) => 
                        (product.id === action.payload.id)
                            ? { ...product, quantity: product.quantity + 1 }
                            : product 
                    ) 
                };
            }
            //se ele não estiver, adiciona-la
            return {
                ...state,
                products: [...state.products, {...action.payload, quantity: 1}]
                };
        
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