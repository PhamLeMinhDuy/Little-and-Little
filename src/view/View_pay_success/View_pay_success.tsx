import React, { useEffect, useState } from 'react'
import './View_pay_success.css'
import { PayTickets } from '../../layout/pay-tickets/PayTickets'
import avatar_Alvin from '../../assets/img/Alvin.png'
import { PayTicketsItem } from '../../layout/pay-tickets-success/pay-tickets-item/PayTicketsItem'
import { Triangle } from 'react-feather'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { CollectionReference, DocumentData, collection, QuerySnapshot, getDocs } from "@firebase/firestore"
import { db } from '../../firebase_config'
export const View_pay_success = () => {
  let page_number = 1
  const number_tickets = useSelector((state: RootState) => parseInt(state.book.book_info[1]));
  const useDate = useSelector((state: RootState) => state.book.book_info[2]);
  const ticketRef: CollectionReference<DocumentData> = collection(db, "ticket");
  const [ticketList, setticketList] = useState<any[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  interface TicketProps {
    ticketID: string;
    type: string;
    usedDay: string;
  }
  useEffect(() => {
        const getListTicket = async () => {
            const data = await getDocs(ticketRef);
            setticketList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        
        getListTicket();
  }, []);
    
  const handleNext = () => {
    if (startIndex + 4 < ticketList.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const handlePrevious = () => {
    if (startIndex >= 4) {
      setStartIndex(startIndex - 4);
    }
  };

  useEffect(() => {
    page_number = (startIndex/4) +1
  },[startIndex])

  const renderEvent = (data:TicketProps) => {
    if (data.usedDay===useDate)
      return <PayTicketsItem ticketId={data.ticketID} ticketType={data.type} usedDay={data.usedDay}/>
  }
  return (
    <div className='view_pay-success' style={{width: "1920px", height: "1080px"}}>
        <div className="view_pay-success-container">
          <h1 className='view_pay-success-container-title'>Thanh toán thành công</h1>
          <img src={avatar_Alvin} className='view_pay-success-container-img' />
          <div className="view_pay-success-container-list">
            <div className="view_pay-success-container-list-item">
              
              {
                    (ticketList.slice(startIndex, startIndex + 4)).map((item) => 
                    {
                        return renderEvent(item)
                    })
                }
            </div>
            <p className='view_pay-success-container-number-tickets'>Số lượng : {number_tickets} vé </p>
            <p className='view_pay-success-container-page-number'>Trang {page_number}/{number_tickets%4 == 0 ? number_tickets/4 : Math.ceil(number_tickets/4+1)} </p>
            <button onClick={handlePrevious} className='view_pay-success-container-button view_pay-success-container-button--1'>
              <Triangle className='view_pay-success-container-button-icon view_pay-success-container-button-icon--1'/>
            </button>
            <button onClick={handleNext} className='view_pay-success-container-button view_pay-success-container-button--2'>
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
