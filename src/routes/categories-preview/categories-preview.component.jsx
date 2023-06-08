import React, {Fragment} from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";


const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap)

    return (
        <Fragment>
            {
                Object.keys(categories).map(title => {
                    const products = categories[title]
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;