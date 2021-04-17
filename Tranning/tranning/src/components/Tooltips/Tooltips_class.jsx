import React from 'react'

class Tooltips_class extends React.Component {
    render() {
        var { too, too_color, position } = this.props
        var color = too_color === undefined ? "" : "black"
        var posi = position === undefined ? "Tooltip on top" : position
        return (
            <button title={`${posi}`}
                style={{ color: color, background: too.background, borderColor: too.background }}>
                {too.text}
            </button>
        )
    }
}
export default Tooltips_class;