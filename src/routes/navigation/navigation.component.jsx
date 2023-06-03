import {Fragment, useContext} from "react";
import {Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/87 - crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context";
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {LogoContainer, NavigationContainer, NavLinks, NavLink} from "./navigation.styles";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {cartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {cartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;