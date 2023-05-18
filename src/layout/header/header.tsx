import React from 'react'
import './header.css'
import logo_little from '../../assets/img/Logo.png'
import { Phone } from 'react-feather'
import { useDispatch } from 'react-redux'
import { selectView } from '../../view/view-active/View_active_slice'
export const Header = () => {
  const dispatch = useDispatch();
  const handleChange = (page:String) => {
    dispatch(selectView(page))
    document.querySelector('.active')?.classList.remove('active')
    document.querySelector('.' + page)?.classList.add('active')
    document.querySelector('.view_pay')?.setAttribute("style", "display:none")
    document.querySelector('.view_pay-success')?.setAttribute("style", "display:none")
  }
  return (
    <div className='header'>
        <div className="header-back"></div>
        <div className="header__logo">
            <img src={logo_little} alt="" />
        </div>
        <div className="header__btn">
          <div>
            <button onClick={() => handleChange("Home")} className="header__btn-item Home active">Trang chủ</button>
            <button onClick={() => handleChange("Event")} className="header__btn-item Event">Sự kiện</button>
            <button onClick={() => handleChange("Contact")} className="header__btn-item Contact">Liên hệ</button>
          </div>
        </div>
        <div className="header__phone">
          <span><Phone className='header__phone-icon'/></span>
          0833299959
        </div>
    </div>
  )
}
