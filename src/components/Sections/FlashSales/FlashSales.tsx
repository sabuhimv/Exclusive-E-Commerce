import React, { useEffect, useState } from 'react'
import section_heading from '../../../assets/icons/section_heading.svg';
import './FlashSales.scss';
import FlashSaleCountdown from '../../FlashSaleCountDown/FlashSaleCountdown';
import ProductCart from '../ProductCart/ProductCart';
import productData from '../../../../products.json'

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const FlashSales = () => {

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        setProducts(productData)
    }, [])

    return (
        <div className='container flash-sales'>
            <div className="section-heading">
                <img src={section_heading} alt="" />
                <p className='section-title'>Today's</p>
            </div>

            <div className='section'>
                <p className='sections-name'>Flash Sales</p>
                <FlashSaleCountdown endTime="2024-10-29T23:59:59" />
            </div>

            <div className="section-body">
                <div className="swiper-container">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        slidesPerView={4}
                        // autoplay={{
                        //     delay: 1000,
                        //     disableOnInteraction: true,
                        // }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCart key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} old_price={product?.old_price} discount={product.discount} stars={product.stars} reviews={product.reviews} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className='section-viewall'>
                <button className='button-red'>
                    <Link to="/">View All Products</Link>
                </button>
            </div>
        </div>
    )
}

export default FlashSales