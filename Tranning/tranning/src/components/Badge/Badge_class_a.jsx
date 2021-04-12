import React from 'react'

class Badge_class_a extends React.Component {
    render() {
        var { a, has, hass } = this.props
        var b = has === undefined ? "" : "#32325d"
        var c = hass === undefined ? "" : "50px"
        return (
            <a href="#lenDau" style={{ background: a.background, color: b, borderRadius: c }}>{a.text}</a>
        )
    }
}
export default Badge_class_a;