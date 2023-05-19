import {createContext, useEffect, useState} from "react";

const addCartItem = (cartItems, product) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === product.id)
    if (existingProduct) {
        return cartItems.map(cartItem => cartItem.id === product.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems, {...product, quantity: 1}]
}

const removeCartItem = (cartItems, product) => {
    const existingProduct = cartItems.find(cartItem => cartItem.id === product.id)

    if (existingProduct.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== existingProduct.id)
    }

    return cartItems.map(cartItem => cartItem.id === product.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}

const clearCartItem = (cartItems, product) => {
    return cartItems.filter(cartItem => cartItem.id !== product.id)
}

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    totalPrice: 0,
})

export const CartProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
        setTotalPrice(newTotalPrice)
    }, [cartItems])

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product))
    }

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems, product))
    }

    const value = {
        cartOpen,
        setCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        totalPrice
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}