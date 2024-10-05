import React, { useEffect, useState } from 'react'
import productData from '../../../products.json'
import ProductCart from '../../components/Sections/ProductCart/ProductCart';
import section_heading from '../../assets/icons/section_heading.svg';
import './Products.scss'

const AllProducts = () => {

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        setProducts(productData)
    }, [])
    return (
        <div className='container products'>
            <p className='page-heading'>Home / <span className='page-heading__active'>Products</span></p>

            <div className="section-heading">
                <img src={section_heading} alt="" />
                <p className='section-title'>Today's</p>
            </div>
            <div className='discount-products'>
                {
                    products.map((item) => (
                        item.discount ?
                            <ProductCart key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} old_price={item?.old_price} discount={item.discount} stars={item.stars} reviews={item.reviews} />
                            : null
                    ))
                }
            </div>
            <br /><br />
            <div className="section-heading">
                <img src={section_heading} alt="" />
                <p className='section-title'>All</p>
            </div>
            <div className='discount-products'>
                {
                    products.map((item) => (
                        !item.discount ?
                            <ProductCart key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} old_price={item?.old_price} discount={item.discount} stars={item.stars} reviews={item.reviews} />
                            : null
                    ))
                }
            </div>
        </div>
    )
}

export default AllProducts