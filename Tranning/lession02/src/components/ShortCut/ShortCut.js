import './../../grid.css'
import './../../App.css'
import './style.css'

function ShotCut() {
    return (
        <div className="shotcut">
            <div className="shotcut_main">
                <a href="#header" className="shotcut_main-item">
                    <img src="http://static.truyenqq.com/template/frontend/images/group.png" alt="" />
                </a>
                <a href="#story_update" className="shotcut_main-item">
                    <img src="http://static.truyenqq.com/template/frontend/images/starts-icon.png" alt="" />
                    <span>Cật nhật</span>
                </a>
                <a href="#story_girl" className="shotcut_main-item">
                    <img src="http://static.truyenqq.com/template/frontend/images/female-icon.png" alt="" />
                    <span>Con gái</span>
                </a>
                <a href="#story_boy" className="shotcut_main-item">
                    <img src="http://static.truyenqq.com/template/frontend/images/male-icon.png" alt="" />
                    <span>Con trai</span>
                </a>
            </div>
            <label htmlFor="downapp" className="shotcut_main-QRCode">
                <img src="http://static.truyenqq.com/template/frontend/images/rect-icon.png" alt="" />
            </label>
        </div>
    )
}
export default ShotCut;