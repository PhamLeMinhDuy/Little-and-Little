import './View_active.css'
import { View_home } from '../View_home/View_home'
import { View_event } from '../View_event/View_event'
import { View_contact } from '../View_contact/View_contact'
import { Header } from '../../layout/header/header'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useEffect } from 'react'
export const View_active = () => {
    const selectedView = useSelector((state:RootState) => state.view.selected)
    useEffect(()=>{

    },[selectedView])
  return (
    <div className='view_active'>
        <Header/>
        {selectedView == "Home" ? <View_home/> : 
        selectedView == "Event" ? <View_event/> : <View_contact/>}
    </div>
  )
}
