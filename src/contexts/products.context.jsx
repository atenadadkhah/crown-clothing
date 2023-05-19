import {createContext, useState, useEffect} from "react";
import SHOP_DATA from '../constants/shop-data.json'

export const ProductsContext = createContext({
    products: [],
    setProducts: () => []
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA)
    const value = {products}

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}