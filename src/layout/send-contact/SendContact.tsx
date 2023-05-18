import React from 'react'
import './SendContact.css'
import { X } from 'react-feather'
export const SendContact = () => {
  const handleHideMessage = () => {
    document.querySelector('.send__contact-message')?.setAttribute("style","display:none")
}
  return (
    <div className="send__contact-message">
      <div className='send__contact'>
          <button onClick={() => handleHideMessage()}><X className='send__contact-icon'/></button>
          <p>Gửi liên hệ thành công.<br/>
          Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!</p>
      </div>

    </div>
  )
}
