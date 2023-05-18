import title_form_short from '../../assets/img/title2.png'
import './book.css'
import '../pay-tickets/PayTickets.css'
import { Calendar, Star, Triangle } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { selectView } from '../../view/view-active/View_active_slice'
import { Calendar_Component } from '../calendar/calendar'
import { RootState } from '../../app/store'
import { setBookInfo } from './book_slice'

export const BookTickets = () => {
    const dispath = useDispatch();
    
    const selectedDay = useSelector((state: RootState) => state.calendar.selectedDay);
    const handleShowCalendar = () => {
        const element = document.querySelector(".book_ticket-calendar") as HTMLElement
        if (element && element.classList.contains("book_ticket-calendar--hidden")) {
            element.setAttribute("style","display:block;");
            element.classList.remove("book_ticket-calendar--hidden")
            element.classList.add("book_ticket-calendar--show")
        } else if (element && element.classList.contains("book_ticket-calendar--show")) { 
            element.setAttribute("style","display:none;");
            element.classList.add("book_ticket-calendar--hidden")
            element.classList.remove("book_ticket-calendar--show")
        }
    }
    const handleShowSuccess = () => {
        const ticket_package = document.getElementById('ticket_package') as HTMLInputElement
        const ticket_number = document.getElementById('ticket_number') as HTMLInputElement
        const full_name = document.getElementById('full_name') as HTMLInputElement
        const phone_number = document.getElementById('phone_number') as HTMLInputElement
        const email = document.getElementById('email') as HTMLInputElement
        const use_date = document.getElementById('use_date') as HTMLInputElement
        dispath(setBookInfo([ticket_package.value , ticket_number.value ,  use_date.value, full_name.value , phone_number.value , email.value]))
        document.querySelector(".view_pay")?.setAttribute("style","display:block")
    }
  return (
    <div className='pay__tickets '>
        <div className="pay__tikets-block1" style={{height: "584px"}}>
            <div className="pay__tickets-block1-container"  style={{padding: "36px 56px", height: "560px"}}>
                <div className="book__tickets-block1-container-content">
                    <p className='book__tickets-block1-container-content-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis. </p>
                    <p className='book__tickets-block1-container-content-paragraph'>Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
                </div>
                <div className="book__tickets-block1-container-note">
                    <p><Star className='book__tickets-block1-container-note-star'/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p><Star className='book__tickets-block1-container-note-star'/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p><Star className='book__tickets-block1-container-note-star'/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p><Star className='book__tickets-block1-container-note-star'/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
        </div>
        <div className="pay__tikets-block2" style={{height: "584px"}}>
            <div className="pay__tickets-block2-container" style={{padding:'74px 22px', height: "560px"}}>
                <div className="pay__tickets-block2-container-title">
                    <img src={title_form_short} style={{width: "284px"}}/>
                    <p>VÉ CỦA BẠN</p>
                </div>
                <div className="book__tickets-block2-container-row">
                    <input type="text" id="ticket_package" value="Gói gia đình"/>
                    <button className='pay__tickets-container-row-calender' ><Triangle className='pay__tickets-container-row-calender-icon book__tickets-container-row-calender-icon'/></button>
                </div>
                <div className="book__tickets-block2-container-row">
                    <span>
                    <input type="text" placeholder='Số lượng vé' id="ticket_number"/>
                    <input type="text" placeholder='Ngày sử dụng' id = "use_date" value={selectedDay
                    } />
                    </span>
                    
                    <button className='pay__tickets-container-row-calender' onClick={() => handleShowCalendar()}><Calendar className='pay__tickets-container-row-calender-icon '/></button>
                </div>
                <div className="book__tickets-block2-container-row">
                    <input type="text" placeholder='Họ và tên' id="full_name"/>
                </div>
                <div className="book__tickets-block2-container-row">
                    <input type="text" placeholder='Số điện thoại' id='phone_number'/>
                </div>
                <div className="book__tickets-block2-container-row">
                    <input type="text" placeholder='Địa chỉ email' id='email'/>
                </div>
                <button className="pay__tickets-container-btn primary-btn" onClick={()=> handleShowSuccess()}>Đặt vé</button>
            </div>
        </div>
        <div className="pay__tickets-cicle" style={{height: "520px"}}>
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
            </div>
            <div></div>
            <div></div>
        </div>
        <div className="book_ticket-calendar book_ticket-calendar--hidden">
            <Calendar_Component/>
        </div>
    </div>
  )
}
