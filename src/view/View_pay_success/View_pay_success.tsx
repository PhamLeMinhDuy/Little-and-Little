import React from 'react'
import './View_pay_success.css'
import { PayTickets } from '../../layout/pay-tickets/PayTickets'
import avatar_Alvin from '../../assets/img/Alvin.png'
import { PayTicketsItem } from '../../layout/pay-tickets-success/pay-tickets-item/PayTicketsItem'
import { Triangle } from 'react-feather'
interface NumberProps {
  number_tickets: number;
}
export const View_pay_success = ({number_tickets}: NumberProps) => {
  const page_number = 1;
  return (
    <div className='view_pay-success' style={{width: "1920px", height: "1080px"}}>
        <div className="view_pay-success-container">
          <h1 className='view_pay-success-container-title'>Thanh toán thành công</h1>
          <img src={avatar_Alvin} className='view_pay-success-container-img' />
          <div className="view_pay-success-container-list">
            <div className="view_pay-success-container-list-item">
              <PayTicketsItem ticketId='ALT20210501' ticketType='Vé cổng' usedDay='31/05/2021'/>
              <PayTicketsItem ticketId='ALT20210501' ticketType='Vé cổng' usedDay='31/05/2021'/>
              <PayTicketsItem ticketId='ALT20210501' ticketType='Vé cổng' usedDay='31/05/2021'/>
              <PayTicketsItem ticketId='ALT20210501' ticketType='Vé cổng' usedDay='31/05/2021'/>
            </div>
            <p className='view_pay-success-container-number-tickets'>Số lượng : {number_tickets} vé </p>
            <p className='view_pay-success-container-page-number'>Trang {page_number}/{number_tickets%4 == 0 ? number_tickets/4 : Math.round(number_tickets/4+1)} </p>
            <button className='view_pay-success-container-button view_pay-success-container-button--1'>
              <Triangle className='view_pay-success-container-button-icon view_pay-success-container-button-icon--1'/>
            </button>
            <button className='view_pay-success-container-button view_pay-success-container-button--2'>
              <Triangle className='view_pay-success-container-button-icon view_pay-success-container-button-icon--2'/>
            </button>
            
          </div>
          <span>
              <button className="view_pay-success-container-btn primary-btn">Tải về</button>
              <button className="view_pay-success-container-btn primary-btn">Gửi mail</button>
          </span>
          
        </div>
    </div>
  )
}
