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
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18/i18n';

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth)
        localStorage.removeItem("loggedUserId")
        navigate("/signup")
    }

    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
    const wishlistCount = useSelector((state: RootState) => state.wishlist.totalCount);

    const { t } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <>
            <div className='header-top container'>
                <p>{t('Header.Add')}</p>
                <select onChange={handleLanguageChange} defaultValue={i18n.language} className="language-selector">
                    <option value="en">En</option>
                    <option value="az">Az</option>
                </select>

            </div>


            <div className='header container'>

                <div className="logo">
                    <img src={Logo} alt="Exclusive" />
                </div>
                <div className="links">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} >{t('Header.Home')}</Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} >{t('Header.Contact')}</Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} >{t('Header.About')}</Link>
                    {
                        localStorage.getItem("loggedUserId") ? <Link to="/signup" onClick={logout} className={`nav-link`}>{t('Header.Log_out')}</Link> : <Link to="/signup" className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`}>{t('Header.Sign_up')}</Link>
                    }
                </div>
                <div className="account-nav">
                    <div className='search-input'>
                        <input type="text" placeholder={t('Header.Search')} />
                        <img src={Search} alt="" />
                    </div>
                    <Link to={"/wishlist"} className='account-nav-cart'>
                        <img src={Wishlist} alt="" />
                        <span className='cart_count'>{wishlistCount}</span>
                    </Link>
                    <Link to="/cart" className='account-nav-wishlist'>
                        <img src={Cart} alt="" />
                        <span className='cart_count'>{totalQuantity}</span>
                    </Link>
                    {
                        localStorage.getItem("loggedUserId") ?
                            <Link to="/account">
                                {
                                    location.pathname === '/account' ? <img src={SelectedAccount} alt="" /> : <img src={Account} alt="" />
                                }

                            </Link> : ""
                    }
                </div>
            </div>
        </>

    )
}

export default Header