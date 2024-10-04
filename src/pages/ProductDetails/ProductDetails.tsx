import React, { useEffect, useState } from 'react'
import './ProductDetails.scss'
import productData from '../../../products.json'
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {

    const [products, setProducts] = useState<any[]>([]);


    useEffect(() => {
        setProducts(productData)
    }, [])

    const location = useLocation();

    const productId = location.pathname.substring(location.pathname.length - 1, location.pathname.length)

    const product: any = products.filter(product => product.id == productId)

    return (
        <div className='container details'>
            <p className='page-heading'>Product / <span>{product[0]?.category}</span> / <span className='page-heading__active'>{product[0]?.title}</span></p>
        
            <h3>{product[0]?.title}</h3>
            <div>{product[0]?.description}</div>
            <div>{product[0]?.price}</div>
        </div>
    )
}

export default ProductDetails