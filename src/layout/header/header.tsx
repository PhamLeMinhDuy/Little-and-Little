import React from 'react'
import './header.css'
import logo_little from '../../assets/img/Logo.png'
import { Phone } from 'react-feather'
export const Header = () => {
  return (
    <div className='header'>
        <div className="header-back"></div>
        <div className="header__logo">
            <img src={logo_little} alt="" />
        </div>
        <div className="header__btn">
          <div>
            <button className="header__btn-item active">Trang chủ</button>
            <button className="header__btn-item">Sự kiện</button>
            <button className="header__btn-item">Liên hệ</button>
          </div>
        </div>
        <div className="header__phone">
          <span><Phone className='header__phone-icon'/></span>
          0833299959
        </div>
    </div>
  )
}
