import React from 'react'
import './EventItem.css'
import event_img from '../../assets/img/event1.png'
import { Calendar } from 'react-feather'
import { useDispatch } from 'react-redux';
import { setEventEndDay, setEventLocation, setEventName, setEventPrice, setEventStartDay } from '../event_info/event_info_slice';
interface EventItemProps {
    event_name: string;
    location: string;
    start_date: string;
    end_date: string;
    price: string;
}
export const EventItem = ({event_name, location, start_date, end_date, price}:EventItemProps) => {
  const dispath = useDispatch()
  const handleShowInfo = () => {
    document.querySelector(".view_event-container-info-page")?.setAttribute("style", "display:block")
    dispath(setEventStartDay(start_date))
    dispath(setEventEndDay(end_date))
    dispath(setEventLocation(location))
    dispath(setEventName(event_name))
    dispath(setEventPrice(price))
  }
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
          <button className='event__ỉtem-content-btn  primary-btn' onClick={() => handleShowInfo()}>Xem chi tiết</button>
        </div>
    </div>
  )
}
