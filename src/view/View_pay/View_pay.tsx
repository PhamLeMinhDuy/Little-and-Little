import React from 'react'
import './View_pay.css'
import { PayTickets } from '../../layout/pay-tickets/PayTickets'
import avatar_Trini from '../../assets/img/Trini.png'
export const View_pay = () => {
  return (
    <div className='view_pay' style={{width: "1920px", height: "1080px"}}>
        <div className="view_pay-container">
        <h1 className='view_pay-container-title'>Thanh toán</h1>
        <img src={avatar_Trini} className='view_pay-container-img' />
        <PayTickets/>
        </div>
    </div>
  )
}
