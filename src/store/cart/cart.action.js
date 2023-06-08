import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPES} from "./cart.types";


const addCartItem = (cartItems, product) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === product.id)
    if (existingProduct) {
        return cartItems.map(cartItem => cartItem.id === product.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
        } : cartItem)
    }
    return [...cartItems, {...product, quantity: 1}]
}

const removeCartItem = (cartItems, product) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === product.id)

    if (existingProduct.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== existingProduct.id)
    }

    return cartItems.map(cartItem => cartItem.id === product.id ? {
        ...cartItem,
        quantity: cartItem.quantity - 1
    } : cartItem)
}

const clearCartItem = (cartItems, product) => {
    return cartItems.filter(cartItem => cartItem.id !== product.id)
}

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addCartItem(cartItems, product)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeCartItem(cartItems, product)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, product) => {
    const newCartItems = clearCartItem(cartItems, product)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const setCartOpen = bool => createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool)
