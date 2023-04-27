import React from 'react'
import './SendContact.css'
import { X } from 'react-feather'
export const SendContact = () => {
  return (
    <div className='send__contact'>
        <button><X className='send__contact-icon'/></button>
        <p>Gửi liên hệ thành công.<br/>
        Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!</p>
    </div>
  )
}
