import React, { useEffect, useState } from 'react'
import './Wishlist.scss'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store';
import ProductCart from '../../components/Sections/ProductCart/ProductCart';
import section_heading from '../../assets/icons/section_heading.svg';
import productData from '../../../products.json'
import { useDispatch } from 'react-redux';
import { clearWishlist } from '../../redux/wishlistSlice';

const Wishlist = () => {

    const cartItems = useSelector((state: RootState) => state.wishlist.items)
    const totalCount = useSelector((state: RootState) => state.wishlist.totalCount)
    const dispatch = useDispatch<AppDispatch>();


    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        setProducts(productData)
    }, [])

    return (
        <div className='container wishlist'>
            <p className='page-heading'>Home / <span className='page-heading__active'>WishList</span></p>
            <div className='wishlist-title'>
                <p className='wishlist-count'>Wishlist ({totalCount})</p>
                <div onClick={()=>dispatch(clearWishlist())} className='button-transparent'>Clear Wishlist</div>
            </div>
            <div className='wishlist-products'>
                {
                    cartItems.map((item) => (
                        <ProductCart key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} old_price={item?.old_price} discount={item.discount} stars={item.stars} reviews={item.reviews} />
                    ))
                }
            </div>

            <div className="related">
                <div className="section-heading">
                    <img src={section_heading} alt="" />
                    <p className='section-title'>Just For You</p>
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

            </div>
        </div>
    )
}

export default Wishlist