import React from 'react'
import './View_event.css'
import left_flag from '../../assets/img/Left_flag.png'
import right_flag from '../../assets/img/Right_flag.png'
import background_dedecorate1 from '../../assets/img/event_bg1.jpg'
import background_dedecorate2 from '../../assets/img/event-bg2.jpg'
import { EventItem } from '../../layout/event-item/EventItem'
export const View_event = () => {
  return (
    <div className='view_event' style={{width: "1920px", height: "1080px"}}>
        <div className="view_event-container">
            <h1 className='view_event-container-title'>Sự kiện nổi bật</h1>
            <img src={left_flag} className='view_event-container--left-flag' />
            <img src={right_flag} className='view_event-container--right-flag' />
            <img src={background_dedecorate1} className='view_event-container--right-flag' />
            <img src={background_dedecorate2} className='view_event-container--right-flag' />

        </div>
    </div>
  )
}