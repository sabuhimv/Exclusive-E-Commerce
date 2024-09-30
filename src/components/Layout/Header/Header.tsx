import React from 'react'
import Logo from '../../../assets/logo/logo.svg'
import Wishlist from '../../../assets/icons/wishlist.svg';
import Search from '../../../assets/icons/search.svg';
import Cart from '../../../assets/icons/cart.svg';


import './Header.scss'

const Header = () => {
    return (
        <div className='header container'>
            <div className="logo">
                <img src={Logo} alt="Exclusive" />
            </div>
            <div className="links">
                <a href="" className="nav-link">Home</a>
                <a href="" className="nav-link">Contact</a>
                <a href="" className="nav-link">About</a>
                <a href="" className="nav-link">Sign Up</a>
            </div>
            <div className="account-nav">
                <div className='search-input'>
                    <input type="text" placeholder='What are you looking for?' />
                    <img src={Search} alt="" />
                </div>
                <a href="">
                    <img src={Wishlist} alt="" />
                </a>
                <a href="">
                    <img src={Cart} alt="" />
                </a>

            </div>
        </div>
    )
}

export default Header