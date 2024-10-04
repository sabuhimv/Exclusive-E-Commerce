import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItemFromCart } from '../../redux/cartSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

import './Cart.scss'

const Cart: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

    return (
        <div className='container cart'>

            <p className='page-heading'>Home / <span className='page-heading__active'>Cart</span></p>

            <table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>


                {cartItems.map((item) => (
                    <tr key={item.id}>
                        <td className='product'>
                            <img src={item.image} alt="" />
                            {item.title}
                        </td>
                        <td>$ {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>$ {item.subtotalPrice.toFixed(2)}</td>
                    </tr>
                ))}


            </table>

            <div className='buttons'>
                <Link className='button-transparent' to="/">Return To Shop</Link>
                <span className='button-transparent' onClick={() => dispatch(clearCart())}>Clear Cart</span>
            </div>

            <div className='cuponAndCart'>
                <div className="cupon">
                    <input type="text" placeholder='Coupon Code' />
                    <button className='button-red'>Apply Coupon</button>
                </div>
                <div className="total">
                    <h3>Cart Total</h3>
                    <p><span>Total Quantity :</span> <span>{totalQuantity}</span></p>
                    <p><span>Total Amount :</span> <span>{totalAmount}</span></p>
                    <div>
                        <button className='button-red'>Procees to checkout</button>
                    </div>
                </div>
            </div>
            {/* <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.title} - {item.quantity} - {item.price} - ${item.subtotalPrice.toFixed(2)} (x{item.quantity})
                        <img src={item.image} alt="" />
                        <button onClick={() => dispatch(removeItemFromCart(item.id))}>Remove</button>
                    </li>
                ))}
            </ul> */}
            {/* <p>Total Quantity: {totalQuantity}</p>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button> */}
        </div>
    );
};

export default Cart;
