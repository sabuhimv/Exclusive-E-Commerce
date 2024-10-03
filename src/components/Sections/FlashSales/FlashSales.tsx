import React, { useEffect, useState } from 'react'
import section_heading from '../../../assets/icons/section_heading.svg';
import './FlashSales.scss';
import FlashSaleCountdown from '../../FlashSaleCountDown/FlashSaleCountdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCart from '../ProductCart/ProductCart';
import productData from '../../../../products.json'

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



                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCart key={product.id} name={product.name} image={product.image} price={product.price} old_price={product?.old_price} discount={product.discount} stars={product.stars} reviews={product.reviews} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='section-viewall'>
                <button>View All</button>
            </div>
        </div>
    )
}

export default FlashSales