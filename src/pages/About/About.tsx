import React from 'react'

import AboutActivity from './AboutActivity/AboutActivity';
import './About.scss'

import about from '../../assets/images/about/about.svg';
import { FaHome } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidWallet } from "react-icons/bi";

const About = () => {
  return (
    <div className='container about'>
      <p className='page-heading'>Home / <span className='page-heading__active'>About</span></p>
      <div className="about-intro">
        <div className="about-intro_left">
          <p className="about-title">Our Story</p>
          <div className="about-description">
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <br />
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
        </div>
        <div className="about-intro_right">
          <img src={about} alt="" />
        </div>
      </div>

      <div className="about-activities">
        <AboutActivity amount={"10.5k"} title={"Sallers active our site"} icon={<FaHome className='icon' />} />
        <AboutActivity amount={"33k"} title={"Mopnthly Produduct Sale"} icon={<AiOutlineDollarCircle className='icon' />} />
        <AboutActivity amount={"45.5k"} title={"Customer active in our site"} icon={<FaShoppingBag className='icon' />} />
        <AboutActivity amount={"25k"} title={"Anual gross sale in our site"} icon={<BiSolidWallet className='icon' />} />
      </div>
    </div>
  )
}

export default About