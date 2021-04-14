import React from 'react'
import $ from 'jquery'
import Dropdowns_class from './Dropdowns_class'

class Dropdowns extends React.Component {
    render() {
        var drops1 = {
            text:"PRIMARY",
            background:"#5e72e4"
        }
        var drops2 = {
            text:"SECONDARY",
            background:"#f4f5f7"
        }
        var drops3 = {
            text:"SUCCESS",
            background:"#2dce89"
        }
        var drops4 = {
            text:"INFO",
            background:"#11cdef"
        }
        var drops5 = {
            text:"WARING",
            background:"#fb6340"
        }
        var drops6 = {
            text:"DANGER",
            background:"#f5365c"
        }
        return (
            <div className="Dropdowns">
                <h2>Examples</h2>
                <div className="Dropdowns_sub">
                    <ul>
                        <li className="Drops_regu" onClick={() => this.onToggle("Drops_regu")}>regular
                            <ul className="sub_drops">
                                <li>Action</li>
                                <li>Another action</li>
                                <li>Something else here</li>
                            </ul>
                        </li>
                        <li className="Drops_flags" onClick={() => this.onToggle("Drops_flags")}>
                            <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/US.png" alt="" />
                            flags
                            <ul className="sub_drops">
                                <li>
                                    <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/DE.png" alt="" />
                                    Deutsch</li>
                                <li>
                                    <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/GB.png" alt="" />
                                    English UK</li>
                                <li>
                                    <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/US.png" alt="" />
                                    Francais</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <h2>Multilevel Dropdown</h2>
                <div className="Dropdowns_sub">
                    <p className="drops_mul" onClick={() => this.onToggle("drops_mul")} >click here
                    <ul className="sub_drops">
                            <li>Action</li>
                            <li>Another action</li>
                            <li className="drops_mul_sub">Submenu</li>
                        </ul>
                    </p>
                </div>
                <h2>Dropup</h2>
                <div className="Dropdowns_sub">
                    <p className="drops_up" onClick={() => this.onToggle("drops_up")} >click Me
                    <ul className="sub_drops sub_drops_up">
                            <li>
                                <i class='fas fa-user-alt'></i>
                            My profile</li>
                            <li>
                                <i class="fa fa-gear"></i>
                                Settings</li>
                            <li>
                                <i class='far fa-calendar-alt'></i>
                                Activity</li>
                            <li>
                                <i class="fa fa-support"></i>
                                Support</li>
                            <li>
                                <i class='fas fa-running'></i>
                                Logout</li>
                        </ul>
                    </p>
                </div>
                <h2>Colors</h2>
                <div className="Dropdowns_sub drops_flex">
                    <Dropdowns_class drops = {drops1}/>
                    <Dropdowns_class drops = {drops2} color="1"/>
                    <Dropdowns_class drops = {drops3} />
                    <Dropdowns_class drops = {drops4} />
                    <Dropdowns_class drops = {drops5} />
                    <Dropdowns_class drops = {drops6} />
                </div>
            </div>
        )
    }
    onToggle = (a) => {
        $(`.${a}`).find(".sub_drops").toggle()
    }
}
export default Dropdowns;