import React from 'react'
import './GetCategory.scss'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CategoryUrls } from '../../../utils/enums';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';

import swiper1 from '../../../assets/images/swiper/swiper1.jpeg'
import swiper2 from '../../../assets/images/swiper/swiper2.jpeg'
import swiper3 from '../../../assets/images/swiper/swiper3.jpeg'

const GetCategory = () => {
    const { t } = useTranslation();

    return (
        <div className='container getcategory'>
            <div className="getcategory-left">
                <Link to={"category" + CategoryUrls.Electronics}>{t('Categories.Category.Electronics')}</Link>
                <Link to={"category" + CategoryUrls.Fashion}>{t('Categories.Category.Fashion')}</Link>
                <Link to={"category" + CategoryUrls.HomeAndKitchen}>{t('Categories.Category.HomeAndKitchen')}</Link>
                <Link to={"category" + CategoryUrls.GroceryAndFood}>{t('Categories.Category.GroceryAndFood')}</Link>
                <Link to={"category" + CategoryUrls.BeautyAndPersonalCare}>{t('Categories.Category.BeautyAndPersonalCare')}</Link>
                <Link to={"category" + CategoryUrls.SportsAndOutdoors}>{t('Categories.Category.SportsAndOutdoors')}</Link>
            </div>
            <div className="getcategory-right">
                <div className="swiper-container">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide className='swiper-slide'><img src={swiper1} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide'><img src={swiper2} alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-slide'><img src={swiper3} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default GetCategory