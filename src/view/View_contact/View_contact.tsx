import React from 'react'
import './View_contact.css'
import background from '../../assets/img/bg.png'
import avatar_Alex from '../../assets/img/Alex.png'
import { Contact } from '../../layout/contact/Contact'
import { ContactInfo } from '../../layout/contact-info/ContactInfo'
import { SendContact } from '../../layout/send-contact/SendContact'
export const View_contact = () => {
  return (
    <div className='view_contact' style={{width: "1920px", height: "1080px"}}>
        <div className="view_contact-container">
            <h1 className='view_contact-container-title'>Liên hệ</h1>
            <img src={avatar_Alex} className='view_contact-container-img' />
            <Contact/>
            <span className='view_contact-container-info'>
            <ContactInfo title='Địa chỉ' content='86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh'/>
            <ContactInfo title='Email' content='investigate@your-site.com'/>
            <ContactInfo title='Điện thoại' content='+84 145 689 798'/>
            </span>
        </div>
        <SendContact/>
    </div>
  )
}
