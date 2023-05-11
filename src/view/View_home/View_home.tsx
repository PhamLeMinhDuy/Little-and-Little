import React from 'react'
import './View_home.css'
import logo from '../../assets/img/Dam_sen_logo.png'
import balloon_1 from '../../assets/img/Hot_air_ balloon1.png'
import balloon_2 from '../../assets/img/Hot_air_ balloon2.png'
import balloon_3 from '../../assets/img/Hot_air_ balloon3.png'
import balloon_4 from '../../assets/img/Hot_air_ balloon4.png'
import balloon_5 from '../../assets/img/Hot_air_ balloon5.png'
import balloon_6 from '../../assets/img/Hot_air_ balloon6.png'
import avatar_group from '../../assets/img/group.png'
import avatar_Lisa from '../../assets/img/Lisa.png'
import { BookTickets } from '../../layout/book/book'
export const View_home = () => {
  return (
    <div className='view_home' style={{width: "1920px", height: "1080px"}}>
        <div className="view_home-container">
            <img src={logo} className='view_home-container-logo'/>
            <img src={avatar_group} className='view_home-container-group'/>
            <img src={balloon_1} className='view_home-container-balloon--1'/>
            <img src={balloon_2} className='view_home-container-balloon--2'/>
            <img src={balloon_3} className='view_home-container-balloon--3'/>
            <img src={balloon_4} className='view_home-container-balloon--4'/>
            <img src={balloon_5} className='view_home-container-balloon--5'/>
            <img src={balloon_6} className='view_home-container-balloon--6'/>
            <h1 className='view_home-container-title'>ĐẦM SEN PARK</h1>
            <BookTickets/>
            <img src={avatar_Lisa} className='view_home-container-img'/>
        </div>
    </div>
  )
}
