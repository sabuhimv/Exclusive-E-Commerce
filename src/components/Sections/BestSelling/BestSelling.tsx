import React, { useEffect, useState } from 'react'
import './BestSelling.scss'
import section_heading from '../../../assets/icons/section_heading.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import productData from '../../../../products.json'
import ProductCart from '../ProductCart/ProductCart';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BestSelling = () => {

    const [products, setProducts] = useState<any[]>([]);
    const {t} = useTranslation();

    useEffect(() => {
        setProducts(productData)
    }, [])

    return (
        <div className='container  flash-sales'>
            <div className="section-heading">
                <img src={section_heading} alt="" />
                <p className='section-title'>{t('BestSelling.Heading')}</p>
            </div>
            <div className='section'>
                <p className='sections-name'>{t('BestSelling.Title')}</p>
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
                            !product.discount ? <SwiperSlide key={product.id}>
                                <ProductCart key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} old_price={product?.old_price} discount={product.discount} stars={product.stars} reviews={product.reviews} />
                            </SwiperSlide> : null

                        ))}
                    </Swiper>
                </div>
            </div>

            <div className='section-viewall'>
                <Link to="/all-products" className='button-red'>{t('BestSelling.Button')}</Link>
            </div>
        </div>
    )
}

export default BestSelling