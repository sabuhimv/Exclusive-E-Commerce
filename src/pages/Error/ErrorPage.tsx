import React from 'react'
import './ErrorPage.scss'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container errorpage'>
            <p className='page-heading'>Home / <span className='page-heading__active'>404 Error</span></p>
            <div className="error">
                <h3>404 Not Found</h3>
                <p>Your visited page not found. You may go home page.</p>
                <Link to={"/"} className='button-red'>Back to home page</Link>
            </div>
        </div>
    )
}

export default ErrorPage