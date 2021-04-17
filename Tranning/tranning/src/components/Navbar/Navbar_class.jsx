import React from 'react'

class Navbar_class extends React.Component {
    render() {
        var { nav, nav1, nav2, nav3, nav4, nav5 } = this.props
        var a = nav1 === undefined ? "" : <div className="Navbar_main_sub nav1_sub">
            <span>Discover</span>
            <span>Profile</span>
            <span>Settings</span>
        </div>
        var b = nav2 === undefined ? a : <div className="Navbar_main_sub">
            <i className="fas fa-heart"></i>
            <i className="fas fa-globe-europe"></i>
            <i className="fas fa-cog"></i>
        </div>
        var c = nav3 === undefined ? b : <div className="Navbar_main_sub">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-instagram"></i>
        </div>
        var d = nav4 === undefined ? c : <div className="Navbar_main_sub">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
        </div>
        var e = nav5 === undefined ? d : <div className="Navbar_main_sub nav5_sub">
            <div>
                <i className="fab fa-facebook-square"></i>
                <span>Facebook</span>
            </div>
            <div>
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
            </div>
            <div>
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
            </div>
        </div>
        return (
            <div className="Nav_bar_main_main variation" style={{ background: nav.background }}>
                <div className="Navbar_main_sub variation_sub">
                    <p>{nav.text}</p>
                </div>
                {e}
            </div>
        )
    }
}
export default Navbar_class;