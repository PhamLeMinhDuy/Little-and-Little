import { useSelector } from 'react-redux'
import title_form from '../../assets/img/title1.png'
import { Calendar_Component } from '../calendar/calendar'
import './PayTickets.css'
import { Calendar } from 'react-feather'
import { RootState } from '../../app/store'
import { PayFail } from '../pay-fail/PayFail'
export const PayTickets = () => {
    const selectedDay = useSelector((state: RootState) => state.calendar.selectedDay);
    const bookInfo = useSelector((state: RootState) => state.book.book_info);
    const tiket_price:number = 90000;

    const handleShowCalendar = () => {
        const element = document.querySelector(".pay_ticket-calendar") as HTMLElement
        if (element && element.classList.contains("pay_ticket-calendar--hidden")) {
            element.setAttribute("style","display:block;");
            element.classList.remove("pay_ticket-calendar--hidden")
            element.classList.add("pay_ticket-calendar--show")
        } else if (element && element.classList.contains("pay_ticket-calendar--show")) { 
            element.setAttribute("style","display:none;");
            element.classList.add("pay_ticket-calendar--hidden")
            element.classList.remove("pay_ticket-calendar--show")
        }
    }
    function phoneNumberCheck(str:string) {
        var regex = /^[0-9]+$/
        return regex.test(str)
    }

    function emailCheck(email:string) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleShowPageSuccess = () => {
        if (bookInfo[4].length != 10 || !phoneNumberCheck(bookInfo[4]) || !emailCheck(bookInfo[5]))  {
            document.querySelector(".pay__fail")?.setAttribute("style", "display:block")
            setTimeout(() => {
                document.querySelector(".pay__fail")?.setAttribute("style", "display:none")
            },3000)
        }
        else {
            document.querySelector(".view_pay-success")?.setAttribute("style", "display:block")
        }
        
    }
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
                        <input type="text" className='pay__tickets-container-row-input' value={`${(parseInt(bookInfo[1])*tiket_price).toLocaleString('vi-VN')} vnđ`}/>
                    </div>
                    <div className="pay__tickets-container-column">
                        <p>Số lượng vé</p>
                        <input type="text" className='pay__tickets-container-row-input' value={bookInfo[1]} />
                    </div>
                    <div className="pay__tickets-container-column">
                        <p>Ngày sử dụng</p>
                        <input type="text" className='pay__tickets-container-row-input' value={bookInfo[2]} />
                    </div>
                </div>
                <div className="pay__tickets-container-row">
                    <p>Thông tin liên hệ</p>
                    <input type="text" id='contact-input' className='pay__tickets-container-row-input' value={bookInfo[3]}/>
                </div>
                <div className="pay__tickets-container-row">
                    <p>Điện thoại</p>
                    <input type="text" id='phone-input' className='pay__tickets-container-row-input' value={bookInfo[4]}/>
                </div>
                <div className="pay__tickets-container-row">
                    <p>Email</p>
                    <input type="email" id='email-input' className='pay__tickets-container-row-input' value={bookInfo[5]}/>
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
                        <input id='date-input' type="text" className='pay__tickets-container-row-input'  value={selectedDay}/>
                        <button className='pay__tickets-container-row-calender' onClick={() => handleShowCalendar()}><Calendar className='pay__tickets-container-row-calender-icon'/></button>
                    </div> 
                </div>
                <div className="pay__tickets-container-row">
                    <p>CVV/CVC</p>
                    <input type="password" id='CVV-input' className='pay__tickets-container-row-input' />
                </div>
                <button className="pay__tickets-container-btn primary-btn" onClick={() => handleShowPageSuccess()}>Thanh toán</button>

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
        <div className="pay_ticket-calendar pay_ticket-calendar--hidden">
            <Calendar_Component/>
        </div>
        <PayFail/>
    </div>
  )
}
