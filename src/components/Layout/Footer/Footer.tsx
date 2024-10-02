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

const Footer = () => {
    return (
        <>
            <div className='container footer'>
                <div className='footer-section'>
                    <p className='footer-section__heading'>Subscribe</p>
                    <ul>
                        <li>Get 10% off your first order</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__heading'>Support</p>
                    <ul>
                        <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li>sabuhimv@icloud.com</li>
                        <li>+99450-648-99-03</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__heading'>Account</p>
                    <ul>
                        <li>
                            <Link to="/account">My Account</Link>
                        </li>
                        <li>
                            <Link to="/signup">Login / Register</Link>
                        </li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__heading'>Quick Link</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p className='footer-section__heading'>Download App</p>

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
                <span>Copyright SabuhiMv 2024. All right reserved</span>
            </div>
        </>
    )
}

export default Footer