import './../../grid.css'
import './../../App.css'
import './style.css'

function Main() {
    return (
        <div className="main">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3 m-12 c-12">
                        <div className="row main_item">
                            <a href="/" className="col l-12 m-6 c-12">
                                <img src="/images/6.jpg" alt="" />
                                <span>Chương 1014</span>
                                <h3>Đảo Hải Tặc</h3>
                            </a>
                            <a href="/" className="col l-12 m-6 c-12">
                                <img src="/images/3.png" alt="" />
                                <span>Chương 5</span>
                                <h3>Liên Quân Mobile - Ánh Sáng & Bóng Tối</h3>
                            </a>
                        </div>
                    </div>
                    <a href="/" className="l-6 m-0 c-0 main_middle">
                        <img src="/images/4.jpg" alt="" />
                        <div className="main_middle-boxShadow"></div>
                        <span>Chương 292</span>
                        <div className="main_item-concept">
                            <h5>Thể loại: Action, Comedy, Drama, Fantasy, Shounen, Supernatural, Mystery</h5>
                            <h3>Black Clover</h3>
                        </div>
                        <p>Aster và Yuno là hai đứa trẻ bị bỏ rơi ở nhà thờ và cùng nhau lớn lên tại đó. Khi còn nhỏ, chúng đã hứa với nhau xem ai sẽ trở thành Ma pháp vương tiếp theo. Thế nhưng, khi cả hai lớn lên, mọi sô chuyện đã thay đổi. Yuno là thiên tài ma pháp với sức mạnh tuyệt đỉnh trong khi Aster lại không thể sử dụng ma pháp và cố gắng bù đắp bằng thể lực. Khi cả hai được nhận sách phép vào tuổi 15, Yuno đã được ban cuốn sách phép cỏ bốn bá (trong khi đa số là cỏ ba lá) mà Aster lại không có cuốn nào. Tuy nhiên, khi Yuno bị đe dọa, sự thật về sức mạnh của Aster đã được giải mã- cậu ta được ban cuốn sách phép...</p>
                    </a>
                    <div className="col l-3 m-12 c-12 main_right">
                        <div className="row main_item">
                            <a href="/" className="col l-12 m-6 c-12">
                                <img src="/images/2.jpg" alt="" />
                                <span>Chương 139.6</span>
                                <h3>Đại Chiến Titan</h3>
                            </a>
                            <a href="/" className="col l-12 m-6 c-12">
                                <img src="/images/6.jpg" alt="" />
                                <span>Chương 205</span>
                                <h3>Kimetsu No Yaiba</h3>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row main_time">
                    <div className="col main_calendar">
                        <div className="row">
                            <div className="col l-2 m-3 c-4">
                                <div className="main_calendar-box">
                                    Lịch ra Truyện Ngày 27/05/2021
                                </div>
                            </div>
                            <div className="col l-10 m-9 c-8 main_calendar-content">
                                <div className="row">
                                    <a href="/" className="col main_calendar-item">
                                        <b>[12:00]</b>
                                        <p>Ma Vương Đi Làm - Chương 92</p>
                                    </a>
                                    <a href="/" className="col main_calendar-item">
                                        <b>[13:00]</b>
                                        <p>Thẻ Đăng Nhập Phong Ấn Siêu Cấp - Chương 8</p>
                                    </a>
                                    <a href="/" className="col main_calendar-item">
                                        <b>[14:00]</b>
                                        <p>Vòng Bạn Bè Địa Phủ - Chương 42</p>
                                    </a>
                                </div>
                                <div className="row">
                                    <a href="/" className="col main_calendar-item">
                                        <b>[15:00]</b>
                                        <p>Ta Có Trăm Vạn Điểm Kỹ Năng - Chương 30</p>
                                    </a>
                                    <a href="/" className="col main_calendar-item">
                                        <b>[16:00]</b>
                                        <p>Tuyệt Thế Võ Công - Chương 59</p>
                                    </a>
                                    <a href="/" className="col main_calendar-item">
                                        <b>[17:00]</b>
                                        <p>Sức Mạnh Của Kiếm Thần - Chương 4</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;