import React from 'react'
import './ProductCart.scss';
import eye from '../../../assets/icons/eye.svg'
import heart from '../../../assets/icons/heart.svg'
import star from '../../../assets/icons/star.svg'
import emptyStar from '../../../assets/icons/emptyStar.svg'
import { Link } from 'react-router-dom';

const ProductCart = ({ name, price, old_price, discount, stars, reviews, image }: any) => {

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


    return (
        <div className='product-cart'>
            <div className="product-cart__top">
                <div className='product-cart__visit'>
                    {
                        discount ? <div className="product-cart__discount">-{discount}%</div> : null
                    }

                    <div className='product-cart__getDetail'>
                        <img src={heart} alt="" />
                        <img src={eye} alt="" />
                    </div>
                </div>
                <div className='product-cart__image'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="product-cart__body">
                <p className='product-cart__productName'>{name}</p>
                <div className='product-cart__prices'>
                    <span className='product-cart__prices_new-price'>{price}</span>
                    <span className='product-cart__prices_old-price'>{old_price}</span>
                </div>
                <div className='product-cart__reviews'>
                    <span className='product-cart__reviews_stars'>{renderStars(stars)}</span>
                    <span className='product-cart__reviews_reviewCount'>({reviews})</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCart