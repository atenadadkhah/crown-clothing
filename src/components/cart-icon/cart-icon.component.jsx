import './cart-icon.styles'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = () => {
    const {cartOpen, setCartOpen, cartCount} = useContext(CartContext)

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={() => setCartOpen(!cartOpen)}/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;