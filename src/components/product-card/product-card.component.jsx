import Button from "../button/button.component";
import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, product))

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItemToCartHandler}>
                Add to cart
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard;