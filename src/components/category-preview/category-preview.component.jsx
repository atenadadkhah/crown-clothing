import './category-preview.styles'
import ProductCard from "../product-card/product-card.component";
import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map(product =>
                            <ProductCard key={product.id} product={product}/>)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;