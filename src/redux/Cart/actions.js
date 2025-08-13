import cartActionType from "./action-types"

export const addProductToCart = (payload) => ({
    type: cartActionType.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload) => ({
    type: cartActionType.REMOVE_PRODUCT,
    payload,
})

export const incrementProductFromCart = (payload) => ({
    type: cartActionType.INCREMENT_PRODUCT,
    payload,
})

export const decreaseProductFromCart = (payload) => ({
    type: cartActionType.DECREASE_PRODUCT,
    payload,
})

