import React, { useState } from 'react'

import Logo from '../../../assets/logo/logo.svg'
import Wishlist from '../../../assets/icons/wishlist.svg';
import Search from '../../../assets/icons/search.svg';
import Cart from '../../../assets/icons/cart.svg';
import Account from '../../../assets/icons/account.svg';
import SelectedAccount from '../../../assets/icons/seleceted_acc.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Header.scss'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/Firebase';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth)
        localStorage.removeItem("loggedUserId")
        navigate("/signup")
    }

    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    return (
        <div className='header container'>
            <div className="logo">
                <img src={Logo} alt="Exclusive" />
            </div>
            <div className="links">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} >Home</Link>
                <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} >Contact</Link>
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} >About</Link>
                {
                    localStorage.getItem("loggedUserId") ? <Link to="/signup" onClick={logout} className={`nav-link`}>Log Out</Link> : <Link to="/signup" className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`}>Sign Up</Link>
                }
            </div>
            <div className="account-nav">
                <div className='search-input'>
                    <input type="text" placeholder='What are you looking for?' />
                    <img src={Search} alt="" />
                </div>
                <Link to={"/wishlist"}>
                    <img src={Wishlist} alt="" />
                </Link>
                <Link to="/cart" className='account-nav-cart'>
                    <img src={Cart} alt="" />
                    <span className='cart_count'>{totalQuantity}</span>
                </Link>
                {
                    localStorage.getItem("loggedUserId") ?
                        <Link to="/account">
                            {
                                location.pathname==='/account' ? <img src={SelectedAccount} alt="" /> : <img src={Account} alt="" /> 
                            }
                            
                        </Link> : ""
                }
            </div>
        </div>
    )
}

export default Header