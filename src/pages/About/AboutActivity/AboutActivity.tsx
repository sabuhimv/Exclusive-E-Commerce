import React from 'react'
import '../About.scss';

const AboutActivity = ({icon,amount,title}:any) => {
  return (
    <div className='about-activity'>
        <div className='about-activity_icon'>{icon}</div>
        <p className="about-activity_amount">{amount}</p>
        <span className='about-activity_title'>{title}</span>
    </div>
  )
}

export default AboutActivity