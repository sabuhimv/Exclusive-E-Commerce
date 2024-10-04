import React from 'react'
import './Category.scss'

import { Link } from 'react-router-dom';


const Category = ({ title, image, url }: any) => {
    return (
        <Link to={url} className='category'>
            <div className='category__image'>
                {image}
            </div>
            <p>{title}</p>
        </Link>
    )
}

export default Category