import React from 'react'
import './EventItem.css'
import event_img from '../../assets/img/event1.png'
import { Calendar } from 'react-feather'
interface EventItemProps {
    event_name: string;
    location: string;
    start_date: string;
    end_date: string;
    price: string;
}
export const EventItem = ({event_name, location, start_date, end_date, price}:EventItemProps) => {
  return (
    <div className='event__ỉtem'>
        <img src={event_img}  />
        <div className="event__ỉtem-content">
          <p className="event__ỉtem-content-name">{event_name}</p>
          <p className="event__ỉtem-content-location">{location}</p>
          <div className="event__ỉtem-content-date">
            <Calendar className='event__ỉtem-content-calendar'/>
            <span>{start_date}</span>
            -
            <span>{end_date}</span>
          </div>
          <p className='event__ỉtem-content-price'>{price} VNĐ</p>
          <button className='event__ỉtem-content-btn  primary-btn'>Xem chi tiết</button>
        </div>
    </div>
  )
}
