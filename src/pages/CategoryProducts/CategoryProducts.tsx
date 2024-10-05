import React, { useEffect, useState } from 'react'
import './CategoryProducts.scss'
import { useLocation } from 'react-router-dom';
import productData from '../../../products.json'
import ProductCart from '../../components/Sections/ProductCart/ProductCart';

const CategoryProducts = () => {

    const [products, setProducts] = useState<any[]>([]);


    useEffect(() => {
        setProducts(productData)
    }, [])


    const location = useLocation();
    const category = location.pathname

    return (
        <div className='container category-products'>
            <p className='page-heading'>Home / <span>Category</span> / <span className='page-heading__active'>{category.slice(10, category.length).replace(/-/g, " ").toUpperCase()}</span></p>
            <div className='products'>
                {
                    products.map((product) => (
                        (category.slice(10, category.length).split("-")[0] == product?.category.toLowerCase().split(" &")[0] ?
                            <ProductCart key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} old_price={product?.old_price} discount={product.discount} stars={product.stars} reviews={product.reviews} />
                            : null)
                    ))
                }
            </div>

        </div>
    )
}

export default CategoryProducts