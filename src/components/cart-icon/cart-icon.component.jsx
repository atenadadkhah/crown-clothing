import './cart-icon.styles'
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectCartOpen} from "../../store/cart/cart.selector";
import {setCartOpen} from "../../store/cart/cart.action";

const CartIcon = () => {
    const dispatch = useDispatch()
    const cartOpen = useSelector(selectCartOpen)
    const cartCount = useSelector(selectCartCount)

    const cartOpenHandler = () => dispatch(setCartOpen(!cartOpen))

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={cartOpenHandler}/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;