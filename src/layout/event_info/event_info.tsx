import React from 'react'
import './event_infor.css'
import img_1 from '../../assets/img/event3.png'
import img_2 from '../../assets/img/event1.png'
import { Calendar } from 'react-feather'
import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
export const Event_Info = () => {
    const startDay = useSelector((state:RootState) => state.event_info.start_day)
    const endDay = useSelector((state:RootState) => state.event_info.end_day)
    const location = useSelector((state:RootState) => state.event_info.location)
    const price = useSelector((state:RootState) => state.event_info.price)
  return (
    <div className='event_info'>
        <div className="event_info-container">
         <div className="event_info-container-column">
            <img src={img_1}/>
            <span>
                <Calendar className='event_info-container-column-calendar-icon'/>{startDay} - {endDay}
                
            </span>
            <p className='event_info-container-column-location'>{location}</p>
            <p className='event_info-container-column-price'>{price} VNĐ</p>

         </div>
         <div className="event_info-container-column">
            <p><span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                 unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic sdsd 
                 typesetting, remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum.</p>
         </div>
         <div className="event_info-container-column">
            <img src={img_2} />
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, </p>
         </div>
         <div className="event_info-container-column">
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, </p>
            <img src={img_2} />
         </div>
            
        </div>
    </div>
  )
}
