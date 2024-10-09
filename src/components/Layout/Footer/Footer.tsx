import React from 'react'
import './Footer.scss'
import qr from '../../../assets/icons/qr.svg';
import googlepay from '../../../assets/icons/googlepay.svg';
import appstore from '../../../assets/icons/appstore.svg';
import facebook from '../../../assets/icons/fb.svg';
import instagram from '../../../assets/icons/instagram.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import copyright from '../../../assets/icons/copyright.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='container footer'>
                <div className='footer-section'>
                    <p className='footer-section__heading'>{t('Footer.Subscribe')}</p>
                    <ul>
                        <li>{t('Footer.Discount')}</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__heading'>{t('Footer.Support')}</p>
                    <ul>
                        <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li>sabuhimv@icloud.com</li>
                        <li>+99450-648-99-03</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__heading'>{t('Footer.Account')}</p>
                    <ul>
                        {
                            localStorage.getItem("loggedUserId") ?
                                <li>
                                    <Link to="/account">{t('Footer.AccountData.MyAccount')}</Link>
                                </li>
                                :
                                <li>
                                    <Link to="/signup">{t('Footer.AccountData.MyAccount')}</Link>
                                </li>
                        }
                        <li>
                            <Link to="/signup">{t('Footer.AccountData.Login')}</Link>
                        </li>
                        <li>
                            <Link to="/cart">{t('Footer.AccountData.Cart')}</Link>
                        </li>
                        <li>
                            <Link to="/cart">{t('Footer.AccountData.Wishlist')}</Link>
                        </li>
                        <li>
                            <Link to="/">{t('Footer.AccountData.Shop')}</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__heading'>{t('Footer.Quicklink')}</p>
                    <ul>
                        <li>{t('Footer.Links.Privarcy')}</li>
                        <li>{t('Footer.Links.Terms')}</li>
                        <li>{t('Footer.Links.FAQ')}</li>
                        <li>{t('Footer.Links.Contact')}</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__heading'>{t('Footer.Download')}</p>

                    <div className='qrAndPayments'>
                        <div className='qr'>
                            <img src={qr} alt="" />
                        </div>
                        <div className='payments'>
                            <img src={googlepay} alt="" />
                            <img src={appstore} alt="" />
                        </div>
                    </div>

                    <div className='socials'>
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </div>

            <div className="container copyright">
                <img src={copyright} alt="" />
                <span>{t('Footer.Copyright')}</span>
            </div>
        </>
    )
}

export default Footer