import React, { useEffect, useState } from 'react'
import './ProductDetails.scss'
import productData from '../../../products.json'

import star from '../../assets/icons/star.svg'
import emptyStar from '../../assets/icons/emptyStar.svg'
import heart from '../../assets/icons/heart.svg'
import delivery from '../../assets/icons/delivery.svg'
import returndelivery from '../../assets/icons/returndelivery.svg'
import section_heading from '../../assets/icons/section_heading.svg';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProductCart from '../../components/Sections/ProductCart/ProductCart'


const ProductDetails = () => {

    const [products, setProducts] = useState<any[]>([]);
    const [selectedSize, setSelectedSize] = useState<string>("");

    const handleSize = (size: string) => {
        setSelectedSize(size)
    }


    useEffect(() => {
        setProducts(productData)
    }, [])

    const location = useLocation();

    const productId = location.pathname.substring(location.pathname.length - 1, location.pathname.length)

    const product: any = products.filter(product => product.id == productId)


    const renderStars = (rating: number) => {
        const totalStars = 5;
        const starsArray = [];
        for (let i = 0; i < rating; i++) {
            starsArray.push(<img key={i} src={star} alt="Star" width={20} height={20} />);
        }
        for (let i = rating; i < totalStars; i++) {
            starsArray.push(<img key={i + rating} src={emptyStar} alt="Empty Star" width={20} height={20} />);
        }

        return starsArray;
    };


    const sizes = ['XS', 'S', 'M', 'L', 'XL'];


    console.log(product[0])

    return (
        <div className='container details'>
            <p className='page-heading'>Product / <span>{product[0]?.category}</span> / <span className='page-heading__active'>{product[0]?.title}</span></p>


            <div className='details-body'>
                <div className="details-image">
                    <img src={product[0]?.image} alt="" />
                </div>
                <div className="details-info">
                    <h3>{product[0]?.title}</h3>
                    <div className='details-reviews'>
                        <span>{renderStars(product[0]?.stars)}</span>
                        <span>({product[0]?.reviews} Reviews)</span>
                    </div>
                    <p className='details-price'>${product[0]?.price.toFixed(2)}</p>
                    <p className='details-description'>{product[0]?.description}</p>
                    {
                        product[0]?.size ?
                            <div className='sizes-section'>
                                <p>Size:</p>
                                <div className="sizes">
                                    {
                                        sizes.map((size) => (
                                            <span className={`size ${selectedSize == size ? 'selected-size' : ''}`} onClick={() => handleSize(size)}>{size}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            : null
                    }
                    <div className='fixing'>
                        <button className='button-red'>Buy Now</button>
                        <Link to="/wishlist">
                            <img src={heart} alt="" />
                        </Link>
                    </div>

                    <div className='delivery'>
                        <div className='free-delivery'>
                            <div><img src={delivery} alt="" /></div>
                            <div className='delivery-details'>
                                <p>Free Delivery</p>
                                <span>Enter your postal code for Delivery Availability</span>
                            </div>
                        </div>
                        <div className='return-delivery'>
                            <div><img src={returndelivery} alt="" /></div>
                            <div className='delivery-details'>
                                <p>Free Delivery</p>
                                <span>Free 30 Days Delivery Returns. Details</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="related">
                <div className="section-heading">
                    <img src={section_heading} alt="" />
                    <p className='section-title'>Related Item</p>
                </div>
                <div className='related-products'>
                    {
                        products.map((item) => (
                            (item.category.toLowerCase() == product[0]?.category.toLowerCase() && item.title.toLowerCase() != product[0]?.title.toLowerCase() ) ?
                                <ProductCart key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} old_price={item?.old_price} discount={item.discount} stars={item.stars} reviews={item.reviews} />
                                : null
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetails