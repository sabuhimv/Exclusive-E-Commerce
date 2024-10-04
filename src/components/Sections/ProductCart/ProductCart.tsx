import React, { useState } from 'react'
import './ProductCart.scss';
import eye from '../../../assets/icons/eye.svg'
import heart from '../../../assets/icons/heart.svg'
import star from '../../../assets/icons/star.svg'
import emptyStar from '../../../assets/icons/emptyStar.svg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../redux/cartSlice';

interface ProductProps {
    id: number;
    title: string;
    price: number;
    old_price: number;
    discount: number;
    stars: number;
    reviews: number;
    image: string;
}

const ProductCart: React.FC<ProductProps> = ({ id, title, price, old_price, discount, stars, reviews, image }: any) => {

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

    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addItemToCart({ id, title, image, price }));
    };


    return (
        <div className='product-cart' key={id}>
            <div className="product-cart__top"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className='product-cart__visit'>
                    {
                        discount ? <div className="product-cart__discount">-{discount}%</div> : null
                    }

                    <div className='product-cart__getDetail'>
                        <img src={heart} alt="" />
                        <img src={eye} alt="" />
                    </div>
                </div>
                <div className='product-cart__image' >
                    <img src={image} alt="" />
                    <div onClick={addToCartHandler} className={`product-cart__overlay ${isHovered ? 'hovered' : ''}`}
                    >
                        <p>Add To Cart</p>
                    </div>
                </div>
            </div>
            <div className="product-cart__body">
                <p className='product-cart__productName'>{title}</p>
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