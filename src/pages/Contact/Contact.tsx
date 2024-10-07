import React from 'react'
import './Contact.scss'
import phone from '../../assets/icons/phone.svg'
import mail from '../../assets/icons/mail.svg'

const Contact = () => {
  return (
    <div className='contact container'>
      <p className='page-heading'>Home / <span className='page-heading__active'>Contact</span></p>

      <div className='contact-container'>
        <div className="contact-container_left">
          <div className='contact-container_left_call'>
            <img src={phone} alt="" />
            <span>Call To Us</span>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +994506489903</p>
          <div className='line'>
            <hr />
          </div>
          <div className='contact-container_left_write'>
            <img src={mail} alt="" />
            <span>Write To Us</span>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: sabuhimv@icloud.com</p>
        </div>
        <div className="contact-container_right">
          <form action="">
            <div className="inputs">
              <input type="text" placeholder='Your Name' />
              <input type="text" placeholder='Your Email' />
              <input type="text" placeholder='Your Phone' />
            </div>
            <textarea name="" id="" placeholder='Your Message' rows={10}></textarea>
            <button type='submit' className='button-red'>Send Massage</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact