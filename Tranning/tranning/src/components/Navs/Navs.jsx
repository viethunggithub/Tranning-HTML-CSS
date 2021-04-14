import React from 'react'
import $ from 'jquery'

class Navs extends React.Component {
    render() {
        return (
            <div className="Navs">
                <h2>Nav pills</h2>
                <div className="Navs_main">
                    <button className="btn1" onClick={() => { this.onClick("btn1") }}>UI/UX Design</button>
                    <button className="btn2" onClick={() => { this.onClick("btn2") }}>Programming</button>
                    <button className="btn3" onClick={() => { this.onClick("btn3") }}>Graphic</button>
                </div>
                <h2>Circled nav pills</h2>
                <div className="Navs_circle">
                    <div className="Navs_circle_sub icon1" onClick={() => { this.onIcon("icon1") }}>
                        <i className="fas fa-atom"></i>
                    </div>
                    <div className="Navs_circle_sub icon2" onClick={() => { this.onIcon("icon2") }}>
                        <i className="fas fa-comment"></i>
                    </div>
                    <div className="Navs_circle_sub icon3" onClick={() => { this.onIcon("icon3") }}>
                        <i className="fas fa-cloud-download-alt"></i>
                    </div>
                </div>
                <h2>Tabs</h2>
                <div className="Navs_tapss">
                    <div className="Navs_taps">
                        <button className="tap1" onClick={() => { this.onNavsTap("tap1") }}>
                            <i className="fas fa-cloud-download-alt"></i>
                        Home</button>
                        <button className="tap2" onClick={() => { this.onNavsTap("tap2") }}>
                            <i className="fas fa-bell"></i>
                        Profile</button>
                        <button className="tap3" onClick={() => { this.onNavsTap("tap3") }}>
                            <i className="far fa-calendar-alt"></i>
                        Messages</button>
                    </div>
                    <div className="tap_sub tap_sub1">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                    </div>
                    <div className="tap_sub tap_sub2">
                        <p>Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                    </div>
                    <div className="tap_sub tap_sub3">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                    </div>
                </div>
                <h2>Just Icons</h2>
            </div>
        )
    }
    onNavsTap = (a) => {
        for (var i = 1; i <= 3; i++) {
            var b = i + 1 > 3 ? 2 : i + 1
            var c = i + 2 > 3 ? 1 : i + 2
            if (a == `tap${i}`) {
                $(`.tap${i}`).attr("style", "background: #5e72e4;color:#ffffff;border-color:#5e72e4")
                $(`.tap${b},.tap${c}`).attr("style", "background: #ffffff;color:#5e72e4;border-color:#ffffff")
                $(`.tap_sub${i}`).show()
                $(`.tap_sub${b},.tap_sub${c}`).hide()
            }
        }
    }
    onIcon = (a) => {
        for (var i = 1; i <= 3; i++) {
            var b = i + 1 > 3 ? 2 : i + 1
            var c = i + 2 > 3 ? 1 : i + 2
            if (a == `icon${i}`) {
                $(`.icon${i}`).find("i").attr("style", "background: #5e72e4;color:#ffffff;border-color:#5e72e4")
                $(`.icon${b},.icon${c}`).find("i").attr("style", "background: #ffffff;color:#5e72e4;border-color:#ffffff")
            }
        }
    }
    onClick = (a) => {
        for (var i = 1; i <= 3; i++) {
            var b = i + 1 > 3 ? 2 : i + 1
            var c = i + 2 > 3 ? 1 : i + 2
            if (a == `btn${i}`) {
                $(`.btn${i}`).attr("style", "background: #5e72e4;color:#ffffff;border-color:#5e72e4")
                $(`.btn${b},.btn${c}`).attr("style", "background: #ffffff;color:#5e72e4;border-color:#ffffff")
            }
        }
    }
}
export default Navs;