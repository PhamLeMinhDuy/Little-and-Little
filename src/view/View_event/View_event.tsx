import React from 'react'
import './View_event.css'
import left_flag from '../../assets/img/Left_flag.png'
import right_flag from '../../assets/img/Right_flag.png'
import background_dedecorate1 from '../../assets/img/event-bg1.png'
import background_dedecorate2 from '../../assets/img/event-bg2.jpg'
import { EventItem } from '../../layout/event-item/EventItem'
import { Triangle } from 'react-feather'
export const View_event = () => {
  return (
    <div className='view_event' style={{width: "1920px", height: "1080px"}}>
        <div className="view_event-container">
            <h1 className='view_event-container-title'>Sự kiện nổi bật</h1>
            <img src={left_flag} className='view_event-container--left-flag' />
            <img src={right_flag} className='view_event-container--right-flag' />
            <img src={background_dedecorate1} className='view_event-container-decor1' />
            <img src={background_dedecorate2} className='view_event-container-decor2' />
            <div className="view_event-component">
              <EventItem event_name='Sự kiện 1' location='Đầm sen Park' start_date='30/05/2021' end_date='01/06/2021' price='25.000'/>
              <EventItem event_name='Sự kiện 1' location='Đầm sen Park' start_date='30/05/2021' end_date='01/06/2021' price='25.000'/>
              <EventItem event_name='Sự kiện 1' location='Đầm sen Park' start_date='30/05/2021' end_date='01/06/2021' price='25.000'/>
              <EventItem event_name='Sự kiện 1' location='Đầm sen Park' start_date='30/05/2021' end_date='01/06/2021' price='25.000'/>
            </div>
            <button className='view_event-container-button view_event-container-button--1'>
              <Triangle className='view_event-container-button-icon view_event-container-button-icon--1'/>
            </button>
            <button className='view_event-container-button view_event-container-button--2'>
              <Triangle className='view_event-container-button-icon view_event-container-button-icon--2'/>
            </button>
        </div>
    </div>
  )
}
