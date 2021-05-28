import './../../grid.css'
import './../../App.css'
import './style.css'

function DownApp() {
    return (
        <div className="downapp_wrap">
            <input type="checkbox" id="downapp" />
            <div className="downapp">
                <div className="downapp_main">
                    <div className="row">
                        <div className="col l-6 downapp_main-QRCode">
                            <p>Quét mã QRCODE để tải ứng dụng QQ</p>
                            <img src="http://static.truyenqq.com/template/frontend/images/app-qrcode.png" alt="" />
                            <p>Hoặc tải từ kho ứng dụng</p>
                            <div className="downapp_icon">
                                <a href="/">
                                    <img src="/images/1.png" alt="" />
                                </a>
                                <a href="/">
                                    <img src="/images/2.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </div>
    )
}
export default DownApp;