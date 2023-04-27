import React from 'react'
import './ContactInfo.css'
import img_location from '../../assets/img/Location.png'
import img_email from '../../assets/img/Email.png'
import img_phone from '../../assets/img/Phone.png'
interface ContactInfoProps {
    content: string;
    title: string;
}
export const ContactInfo = ({content, title}:ContactInfoProps) => {
    
  return (
    <div className='contact__info'>
        <div className="contact__info-container">
            <div className="contact__info-conainer-img">
                <img src={title=='Địa chỉ' ? img_location : title == 'Email' ? img_email:img_phone} alt="" />

            </div>
            <div className="contact__info-container-info">
                <span>{title + ':'}</span><br/>
                <p>{content}</p>
            </div>
        </div>
    </div>
  )
}
