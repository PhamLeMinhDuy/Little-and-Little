import './PayFail.css'
import sad_icon from '../../assets/img/sad_emoji.png'
export const PayFail = () => {
  return (
    <div className="pay__fail">
        <div className="pay__fail-header">
            <img src={sad_icon} className='pay__fail-header-icon' />
        </div>
        <div className="pay__fail-text">
            <p>Hình như đã có lỗi xảy ra khi thanh toán...<br/>
            Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.</p>
        </div>
    </div>
  )
}
