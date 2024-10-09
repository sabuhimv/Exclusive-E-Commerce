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
import { useTranslation } from 'react-i18next';

const Categories = () => {

  const { t } = useTranslation();
  
  return (
    <div className='container categories'>
      <div className="section-heading">
        <img src={section_heading} alt="" />
        <p className='section-title'>{t('Categories.Heading')}</p>
      </div>

      <div className='section'>
        <p className='sections-name'>{t('Categories.Title')}</p>
      </div>

      <div className="section-body">
        <Category title={t('Categories.Category.Electronics')} image={<CiDesktop />} url={"category" + CategoryUrls.Electronics} />
        <Category title={t('Categories.Category.HomeAndKitchen')} image={<PiArmchairLight />} url={"category" + CategoryUrls.HomeAndKitchen} />
        <Category title={t('Categories.Category.Fashion')} image={<GiClothes />} url={"category" + CategoryUrls.Fashion} />
        <Category title={t('Categories.Category.GroceryAndFood')} image={<IoFastFoodOutline />} url={"category" + CategoryUrls.GroceryAndFood} />
        <Category title={t('Categories.Category.BeautyAndPersonalCare')} image={<FaUserDoctor />} url={"category" + CategoryUrls.BeautyAndPersonalCare} />
        <Category title={t('Categories.Category.SportsAndOutdoors')} image={<IoFootballOutline />} url={"category" + CategoryUrls.SportsAndOutdoors} />
      </div>
    </div>
  )
}

export default Categories