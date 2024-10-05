import React from 'react'
import './Categories.scss'

import section_heading from '../../../assets/icons/section_heading.svg';
import Category from '../../Category/Category';

import { CiDesktop } from "react-icons/ci";
import { PiArmchairLight } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoFootballOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { CategoryUrls } from '../../../utils/enums';

const Categories = () => {
  return (
    <div className='container categories'>
      <div className="section-heading">
        <img src={section_heading} alt="" />
        <p className='section-title'>Categories</p>
      </div>

      <div className='section'>
        <p className='sections-name'>Flash Sales</p>
      </div>

      <div className="section-body">
        <Category title={"Electronics"} image={<CiDesktop />} url={"category" + CategoryUrls.Electronics} />
        <Category title={"Home & Kitchen"} image={<PiArmchairLight />} url={"category" + CategoryUrls.HomeAndKitchen} />
        <Category title={"Fashion"} image={<GiClothes />} url={"category" + CategoryUrls.Fashion} />
        <Category title={"Grocery & Food"} image={<IoFastFoodOutline />} url={"category" + CategoryUrls.GroceryAndFood} />
        <Category title={"Beauty & Personal Care"} image={<FaUserDoctor />} url={"category" + CategoryUrls.BeautyAndPersonalCare} />
        <Category title={"Sports & Outdoors"} image={<IoFootballOutline />} url={"category" + CategoryUrls.SportsAndOutdoors} />
      </div>
    </div>
  )
}

export default Categories