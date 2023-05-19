import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CartIcon = () => {
    const {cartOpen, setCartOpen, cartCount} = useContext(CartContext)

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={() => setCartOpen(!cartOpen)}/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;