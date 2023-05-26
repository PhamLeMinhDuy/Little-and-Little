import React, { useEffect, useState } from 'react'
import './View_event.css'
import left_flag from '../../assets/img/Left_flag.png'
import right_flag from '../../assets/img/Right_flag.png'
import background_dedecorate1 from '../../assets/img/event-bg1.png'
import background_dedecorate2 from '../../assets/img/event-bg2.jpg'
import { EventItem } from '../../layout/event-item/EventItem'
import { Triangle } from 'react-feather'
import { Event_Info } from '../../layout/event_info/event_info'
import { db } from '../../firebase_config'
import { CollectionReference, DocumentData, collection, QuerySnapshot, getDocs } from "@firebase/firestore"
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
export const View_event = () => {
  interface EventProps {
    name: string;
    location: string;
    startDay: string;
    enDay: string;
    price: string;
  }
  const name = useSelector((state: RootState) => state.event_info.name);
  const eventRef: CollectionReference<DocumentData> = collection(db, "event");
  const [eventList, seteventList] = useState<any[]>([]);
  const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const getListTicket = async () => {
            const data = await getDocs(eventRef);
            seteventList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        
        getListTicket();
    }, []);
    
  const handleNext = () => {
    if (startIndex + 4 < eventList.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const handlePrevious = () => {
    if (startIndex >= 4) {
      setStartIndex(startIndex - 4);
    }
  };

  const renderEvent = (data:EventProps) => {
      return <EventItem event_name={data.name} location={data.location} start_date={data.startDay} end_date={data.enDay} price={data.price}/>
  }
  return (
    <div className='view_event' style={{width: "1920px", height: "1080px"}}>
        <div className="view_event-container">
            <h1 className='view_event-container-title'>Sự kiện nổi bật</h1>
            <img src={left_flag} className='view_event-container--left-flag' />
            <img src={right_flag} className='view_event-container--right-flag' />
            <img src={background_dedecorate1} className='view_event-container-decor1' />
            <img src={background_dedecorate2} className='view_event-container-decor2' />
            <div className="view_event-component">
              {
                    (eventList.slice(startIndex, startIndex + 4)).map((item) => 
                    {
                        return renderEvent(item)
                    })
                }
            </div>
            <button className='view_event-container-button view_event-container-button--1'>
              <Triangle onClick={handlePrevious} className='view_event-container-button-icon view_event-container-button-icon--1'/>
            </button>
            <button onClick={handleNext} className='view_event-container-button view_event-container-button--2'>
              <Triangle className='view_event-container-button-icon view_event-container-button-icon--2'/>
            </button>
        </div>
        <div className="view_event-container-info-page view_event-container ">
           <h1 className='view_event-container-title'>{name}</h1>
            <img src={left_flag} className='view_event-container--left-flag' />
            <img src={right_flag} className='view_event-container--right-flag' />
            <img src={background_dedecorate1} className='view_event-container-decor1' />
            <img src={background_dedecorate2} className='view_event-container-decor2' />
        <Event_Info/>
        </div>
    </div>
  )
}


