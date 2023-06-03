import Button from "../button/button.component";
import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemToCart(product)}>
                Add to cart
            </Button>
        </ProductCardContainer>
    )
}

export default ProductCard;