import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/87 - crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context";
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss';

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {cartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {cartOpen && <CartDropdown />}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;