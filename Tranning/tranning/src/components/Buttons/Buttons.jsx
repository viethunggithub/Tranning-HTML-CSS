import React from 'react'
import Buttons_class from './Buttons_class'

class Buttons extends React.Component {
    render() {
        var btn1 = {
            background: " #5e72e4",
            text: "Primary"
        }
        var btn2 = {
            background: "#11cdef",
            text: "Info"
        }
        var btn3 = {
            background: "#2dce89",
            text: "Success"
        }
        var btn4 = {
            background: "#f5365c",
            text: "Danger"
        }
        var btn5 = {
            background: "#fb6340",
            text: "Warning"
        }
        var btn6 = {
            background: "#172b4d",
            text: "Default"
        }
        var btn7 = {
            background: "#f4f5f7",
            text: "Secondary"
        }
        var btn8 = {
            background: " #5e72e4",
            text: "default"
        }
        var btn9 = {
            background: " #5e72e4",
            text: "round"
        }
        var btn10 = {
            background: " #5e72e4",
            text: "with icon"
        }
        var btn11 = {
            background: " #5e72e4",
            text: ""
        }
        var btn12 = {
            background: " #5e72e4",
            text: "neutral"
        }
        var btn13 = {
            background: " #5e72e4",
            text: "small"
        }
        var btn14 = {
            background: " #5e72e4",
            text: "regular"
        }
        var btn15 = {
            background: " #5e72e4",
            text: "large"
        }
        return (
            <div className="Buttons">
                <h2>Examples</h2>
                <Buttons_class btn={btn1} />
                <Buttons_class btn={btn2} />
                <Buttons_class btn={btn3} />
                <Buttons_class btn={btn4} />
                <Buttons_class btn={btn5} />
                <Buttons_class btn={btn6} />
                <Buttons_class btn={btn7} has="1" />
                <h2>Style buttons</h2>
                <Buttons_class btn={btn8} />
                <Buttons_class btn={btn9} />
                <Buttons_class btn={btn10} />
                <Buttons_class btn={btn11} hasss="1" />
                <Buttons_class btn={btn12} hass="1" />
                <h2>Sizes</h2>
                <Buttons_class btn={btn13} have="1" />
                <Buttons_class btn={btn14} />
                <Buttons_class btn={btn15} haves="1" />
                <h2>Disabled state</h2>
                <div className="btn_btn_button">
                    <button>primary button</button>
                    <button>button</button>
                </div>
            </div>
        )
    }
}
export default Buttons;