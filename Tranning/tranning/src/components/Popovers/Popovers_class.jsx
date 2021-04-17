import React from 'react'
import $ from 'jquery'

class Popovers_class extends React.Component {
    render() {
        var { pop, color } = this.props
        var colors = color === undefined ? "" : "#212529"
        return (
            <button className={`A${pop.background.substr(1,5)}`}
                onClick={() => { this.onClick_Multi(`A${pop.background.substr(1,5)}`) }}
                style={{ color: colors, background: pop.background, borderColor: pop.background }}>
                {pop.text}
                <div className="pop_btn_end">
                    <p>This is a very beautiful popover, show some love.</p>
                </div>
            </button>
        )
    }
    onClick_Multi = (a) => {
        $(`.${a}`).find(".pop_btn_end").toggle()
    }
}
export default Popovers_class;