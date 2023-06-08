import './checkout.styles'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, Total, HeaderBlock} from "./checkout.styles";
import {useSelector} from "react-redux";
import {selectCartItems, selectTotalPrice} from "../../store/cart/cart.selector";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectTotalPrice)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>

            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <Total>Total: ${totalPrice}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;