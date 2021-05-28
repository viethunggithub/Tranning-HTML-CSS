import './../../grid.css'
import './../../App.css'
import './style.css'

function Header() {
    return (
        <div className="header" id="header">
            <div className="grid wide">
                <div className="row header_main">
                    <div className="col l-7 c-12 header_main-item">
                        <a href="/" className="l-3 c-0 header_logo">
                            <img src="http://static.truyenqq.com/template/frontend/images/logo.png" alt="" />
                        </a>
                        <div className="l-9 c-12 header_input">
                            <input type="text" placeholder="Bạn cứ nhập từ khóa, còn lại để qq lo" />
                            <img src="http://static.truyenqq.com/template/frontend/images/search-icon.png" alt="" />
                            <div className="header_history">
                                <div className="header_history-title">Tìm kiếm gần đây</div>
                                <div className="header_history-list">
                                    <a href="/" className="header_history-item">
                                        <img src="/images/3.png" alt="" />
                                        <div className="header_history-details">
                                            <h4>Tuyệt thế vô song</h4>
                                            <h5>Doan Viet Hung</h5>
                                            <h6>Chương 197</h6>
                                        </div>
                                    </a>
                                    <a href="/" className="header_history-item">
                                        <img src="/images/3.png" alt="" />
                                        <div className="header_history-details">
                                            <h4>Tuyệt thế vô song</h4>
                                            <h5>Doan Viet Hung</h5>
                                            <h6>Chương 197</h6>
                                        </div>
                                    </a>
                                    <a href="/" className="header_history-item">
                                        <img src="/images/3.png" alt="" />
                                        <div className="header_history-details">
                                            <h4>Tuyệt thế vô song</h4>
                                            <h5>Doan Viet Hung</h5>
                                            <h6>Chương 197</h6>
                                        </div>
                                    </a>
                                    <a href="/" className="header_history-item">
                                        <img src="/images/3.png" alt="" />
                                        <div className="header_history-details">
                                            <h4>Tuyệt thế vô song</h4>
                                            <h5>Doan Viet Hung</h5>
                                            <h6>Chương 197</h6>
                                        </div>
                                    </a>
                                    <a href="/" className="header_history-item">
                                        <img src="/images/3.png" alt="" />
                                        <div className="header_history-details">
                                            <h4>Tuyệt thế vô song</h4>
                                            <h5>Doan Viet Hung</h5>
                                            <h6>Chương 197</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-5 c-12 header_main-item">
                        <div className="l-8 c-0 header_menu">
                            <div className="header_menu-item">
                                <a href="/">Lịch sử</a>
                            </div>
                            <div className="header_menu-item">
                                <a href="/">Theo dõi</a>
                            </div>
                            <div className="header_menu-item">
                                <label  htmlFor="downapp">
                                    <img src="http://static.truyenqq.com/template/frontend/images/download-app-icon.png" alt="" />
                                    Tải App</label>
                            </div>
                        </div>
                        <div className="c-0 header_menu-icon">
                            <i className="fas fa-stream"></i>
                            <div className="header_menu-icon-sub">
                                <div className="header_menu-item">
                                    <a href="/">Lịch sử</a>
                                </div>
                                <div className="header_menu-item">
                                    <a href="/">Theo dõi</a>
                                </div>
                                <div className="header_menu-item">
                                    <a href="/">Tìm truyện</a>
                                </div>
                                <div className="header_menu-item">
                                    <a href="/">Thảo luận</a>
                                </div>
                                <div className="header_menu-item">
                                    <a href="/">Fanpage</a>
                                </div>
                                <div className="header_menu-item">
                                    <a href="/">
                                        <img src="http://static.truyenqq.com/template/frontend/images/download-app-icon.png" alt="" />
                                    Tải App</a>
                                </div>
                            </div>
                        </div>
                        <div className="l-4 header_button">
                            <button>Đăng nhập</button>
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;