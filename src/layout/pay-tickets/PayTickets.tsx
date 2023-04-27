import title_form from '../../assets/img/title1.png'
import './PayTickets.css'
import { Calendar } from 'react-feather'
export const PayTickets = () => {
  return (
    <div className='pay__tickets'>
        <div className="pay__tikets-block1">
            <div className="pay__tickets-block1-container">
                <div className="pay__tickets-block1-container-title">
                    <img src={title_form} />
                    <p>VÉ CỔNG - VÉ GIA ĐÌNH</p>
                </div>
                <div className="pay__tickets-container-row pay__tickets-container-row-css">
                    <div className="pay__tickets-container-column">
                        <p>Số tiền thanh toán</p>
                        <input type="text" className='pay__tickets-container-row-input' />
                    </div>
                    <div className="pay__tickets-container-column">
                        <p>Số lượng vé</p>
                        <input type="text" className='pay__tickets-container-row-input' />
                    </div>
                    <div className="pay__tickets-container-column">
                        <p>Ngày sử dụng</p>
                        <input type="text" className='pay__tickets-container-row-input' />
                    </div>
                </div>
                <div className="pay__tickets-container-row">
                    <p>Thông tin liên hệ</p>
                    <input type="text" id='contact-input' className='pay__tickets-container-row-input' />
                </div>
                <div className="pay__tickets-container-row">
                    <p>Điện thoại</p>
                    <input type="text" id='phone-input' className='pay__tickets-container-row-input' />
                </div>
                <div className="pay__tickets-container-row">
                    <p>Email</p>
                    <input type="email" id='email-input' className='pay__tickets-container-row-input' />
                </div>
            </div>
        </div>
        <div className="pay__tikets-block2">
            <div className="pay__tickets-block2-container">
                <div className="pay__tickets-block2-container-title">
                    <img src={title_form} />
                    <p>THÔNG TIN THANH TOÁN</p>
                </div>
                <div className="pay__tickets-container-row ">
                    <p>Số thẻ</p>
                    <input type="text" className='pay__tickets-container-row-input' />
                </div>
                <div className="pay__tickets-container-row">
                    <p>Họ tên chủ thẻ</p>
                    <input type="text" className='pay__tickets-container-row-input' />
                </div>
                <div className="pay__tickets-container-row ">
                    <p>Ngày hết hạn</p>
                    <div className="pay__tickets-container-row-btn">
                        <input id='date-input' type="text" className='pay__tickets-container-row-input' />
                        <button className='pay__tickets-container-row-calender'><Calendar className='pay__tickets-container-row-calender-icon'/></button>
                    </div> 
                </div>
                <div className="pay__tickets-container-row">
                    <p>CVV/CVC</p>
                    <input type="password" id='CVV-input' className='pay__tickets-container-row-input' />
                </div>
                <button className="pay__tickets-container-btn primary-btn">Thanh toán</button>

            </div>
        </div>
        <div className="pay__tickets-cicle">
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
