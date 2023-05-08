import title_form_short from '../../assets/img/title2.png'
import './book.css'
import '../pay-tickets/PayTickets.css'
import { Calendar, Star, Triangle } from 'react-feather'
export const BookTickets = () => {
  return (
    <div className='pay__tickets'>
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
                    <input type="text" value="Gói gia đình"/>
                    <button className='pay__tickets-container-row-calender'><Triangle className='pay__tickets-container-row-calender-icon book__tickets-container-row-calender-icon'/></button>
                </div>
                <div className="book__tickets-block2-container-row">
                    <span>
                    <input type="text" placeholder='Số lượng vé' />
                    <input type="text" placeholder='Ngày sử dụng' />
                    </span>
                    
                    <button className='pay__tickets-container-row-calender'><Calendar className='pay__tickets-container-row-calender-icon '/></button>
                </div>
                <div className="book__tickets-block2-container-row">
                    <input type="text" placeholder='Họ và tên'/>
                </div>
                <div className="book__tickets-block2-container-row">
                    <input type="text" placeholder='Số điện thoại'/>
                </div>
                <div className="book__tickets-block2-container-row">
                    <input type="text" placeholder='Địa chỉ email'/>
                </div>
                <button className="pay__tickets-container-btn primary-btn">Đặt vé</button>
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
    </div>
  )
}
