import './directory-item.styles'
import {useNavigate} from "react-router-dom";
import {BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.styles";

const DirectoryItem = ({ category: { title, imageUrl, route }}) => {
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;