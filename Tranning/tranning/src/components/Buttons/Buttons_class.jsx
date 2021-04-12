import React from 'react'

class Buttons_class extends React.Component {
    render() {
        var { btn, has, hass, hasss, have, haves } = this.props
        var a = has === undefined ? "" : '#212529'
        var b = hass === undefined ? btn.background : "#ffffff"
        var aa = hass === undefined ? a : "#5e72e4"
        var text = hasss === undefined ? btn.text : <div className="btn_before"></div>
        var d = have === undefined ? "" : "4px 8px"
        var dd = haves === undefined ? d : "14px 16px"
        return (
            <button style={{ background: b, color: aa,padding: dd}}>{text}</button>
        )
    }
}
export default Buttons_class;