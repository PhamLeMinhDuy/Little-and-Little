import './PayTicketsItem.css'
import QR from '../../../assets/img/QR.png'
import { Check } from 'react-feather'
interface PayTicketsItemProps {
    ticketId: string;
    ticketType: string;
    usedDay: string;
}
export const PayTicketsItem = ({ticketId, ticketType, usedDay}:PayTicketsItemProps) => {
  return (
    <div className='pay__tickets-item'>
        <img src={QR} className='pay__tickets-item-QR'/>
        <p className='pay__tickets-item-id'>{ticketId}</p>
        <p className='pay__tickets-item-type'>{ticketType}</p>
        <p>---</p>
        <p className='pay__tickets-item-usedday'>Ngày sử dụng: {usedDay}</p>
        <span className='pay__tickets-item-icon'>
            <Check className='pay__tickets-item-icon-check'/>
        </span>
    </div>
  )
}
