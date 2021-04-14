import React from 'react'
import $ from 'jquery'

class Dropdowns_class extends React.Component {
    render() {
        var { drops, color } = this.props
        var colors = color === undefined ? "" : "#212529"
        return (
            <div style={{background:drops.background, color:colors}} className={`drops_color ${drops.text}`} onClick={() => { this.onToggle(`${drops.text}`) }}>{drops.text}
                <ul className="sub_drops drops_color_a">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li>Separated link</li>
                </ul>
            </div>
        )
    }
    onToggle = (a) => {
        $(`.${a}`).find(".sub_drops").toggle()
    }
}
export default Dropdowns_class;