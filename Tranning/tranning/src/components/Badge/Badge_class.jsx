import React from 'react'

class Badge_class extends React.Component {
    render() {
        var { a, has, hass } = this.props
        var b = has === undefined ? "" : "#32325d"
        var c = hass === undefined ? "" : "50px"
        return (
            <span style={{ background: a.background, color: b, borderRadius: c }}>{a.text}</span>
        )
    }
}
export default Badge_class;

