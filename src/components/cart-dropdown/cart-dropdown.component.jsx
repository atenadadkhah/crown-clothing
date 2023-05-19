import './cart-dropdown.styles.scss'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div
            className='cart-dropdown-container'>
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            </div>
            <Button onClick={goToCheckoutHandler}>GO To CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;