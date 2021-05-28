import './../../grid.css'
import './../../App.css'
import './style.css'

function Footer() {
    return (
        <div className="footer">
            <div className="grid wide">
                <div className="row footer_links">
                    <a href="/">Truyen tranh</a>
                    <a href="/">Truyện tranh</a>
                    <a href="/">Truyen tranh online</a>
                    <a href="/">Truyện tranh online</a>
                    <a href="/">Doc truyen tranh</a>
                    <a href="/">Đọc truyện tranh</a>
                    <a href="/">Manhua</a>
                    <a href="/">Manga</a>
                </div>
            </div>
            <div className="footer_main">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-8 m-8 c-12 footer_main-item">
                            <a href="/">
                                <img src="http://static.truyenqq.com/template/frontend/images/logo.png" alt="" />
                            </a>
                            <p>Copyright © 2019 - Email: ad.truyenqq@gmail.com</p>
                        </div>
                        <div className="col l-4 m-4 c-12 footer_main-item">
                            <a href="/">
                                <img src="/images/1.png" alt="" />
                            </a>
                            <a href="/">
                                <img src="/images/2.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;