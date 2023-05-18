import React from 'react'
import './Contact.css'
import { SendContact } from '../send-contact/SendContact'
export const Contact = () => {
    const handleShowMessage = () => {
        document.querySelector('.send__contact-message')?.setAttribute("style","display:block")
    }
  return (
    <div className='contact'>
        <div className="contact-container">
            <div className="contact-container-row">
                <p className='contact-container-row-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis. 
                </p>
            </div>
            <div className="contact-container-row">
                <div className="contact-container-row-column1">
                    <input type="text" placeholder='Tên'/>
                </div>
                <div className="contact-container-row-column2">
                    <input type="text" placeholder='Email'/>
                </div>
            </div>
            <div className="contact-container-row">
            <div className="contact-container-row-column1">
                    <input type="text" placeholder='Số điện thoại'/>
                </div>
                <div className="contact-container-row-column2">
                    <input type="text" placeholder='Địa chỉ'/>
                </div>
            </div>
            <div className="contact-container-row">
                <textarea cols={30} rows={10} placeholder='Lời nhắn'></textarea>
            </div>
            <div className="contact-container-row">
                <button className="contact-container-row-btn primary-btn" onClick={() => handleShowMessage()}>Gửi liên hệ</button>
            </div>
        </div>
    </div>
  )
}

