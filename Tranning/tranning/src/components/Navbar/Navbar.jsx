import React from 'react'
import Navbar_class from './Navbar_class'

class Navbar extends React.Component {
    render() {
        var nav1 = {
            background:"#5e72e4",
            text:"PRIMARY COLOR"
        }
        var nav2 = {
            background:"#2dce89",
            text:"SUCCESS COLOR"
        }
        var nav3 = {
            background:"#f5365c",
            text:"DANGER COLOR"
        }
        var nav4 = {
            background:"#fb6340",
            text:"WARNING COLOR"
        }
        var nav5 = {
            background:"#11cdef",
            text:"INFO COLOR"
        }
        return (
            <div className="Navbar">
                <h2>Example</h2>
                <div className="Navbar_main">
                    <div className="Nav_bar_main_main">
                        <div className="Navbar_main_sub">
                            <p>DEFAULT COLOR</p>
                        </div>
                        <div className="Navbar_main_sub">
                            <i className="fas fa-heart"></i>
                            <i className="fas fa-bell"></i>
                            <i className="fas fa-cog"></i>
                        </div>
                    </div>
                </div>
                <h2>Variations</h2>
                <Navbar_class nav={nav1} nav1="1"/>
                <Navbar_class nav={nav2} nav2="2"/>
                <Navbar_class nav={nav3} nav3="3"/>
                <Navbar_class nav={nav4} nav4="4"/>
                <Navbar_class nav={nav5} nav5="5"/>
            </div>
        )
    }
}
export default Navbar;