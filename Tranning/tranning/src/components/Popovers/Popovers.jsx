import React from 'react'
import $ from 'jquery'
import Popovers_class from './Popovers_class'

class Popovers extends React.Component {
    render() {
        var pop1 = {
            background: "#5E72E4",
            text: "PRIMARY POPOVER"
        }
        var pop2 = {
            background: "#11cdef",
            text: "INFO POPOVER"
        }
        var pop3 = {
            background: "#2dce89",
            text: "SUCCESS POPOVER"
        }
        var pop4 = {
            background: "#f5365c",
            text: "DANGER POPOVER"
        }
        var pop5 = {
            background: "#fb6340",
            text: "WARNING POPOVER"
        }
        var pop6 = {
            background: "#172b4d",
            text: "DEFAULT POPOVER"
        }
        var pop7 = {
            background: "#f4f5f7",
            text: "SECONDARY POPOVER"
        }
        return (
            <div className="Popovers">
                <h2>Example</h2>
                <div className="Popovers_main">
                    <button onClick={() => { this.onClick("pop_top1") }}>POPOVER ON TOP
                        <div className="pop_top pop_top1">
                            <p>This is a very beautiful popover, show some love.</p>
                        </div>
                    </button>
                    <button onClick={() => { this.onClick("pop_top2") }}
                    >POPOVER ON RIGHT
                        <div className="pop_top pop_top2">
                            <p>This is a very beautiful popover, show some love.</p>
                        </div>
                    </button>
                    <button onClick={() => { this.onClick("pop_top3") }}>
                        POPOVER ON BOTTOM
                        <div className="pop_top pop_top3">
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
                        </div>
                    </button>
                    <button onClick={() => { this.onClick("pop_top4") }}>
                        POPOVER ON LEFT
                        <div className="pop_top pop_top4">
                            <p>This is a very beautiful popover, show some love.</p>
                        </div>
                    </button>
                </div>
                <h2>Variations</h2>
                <div className="Popovers_main pop_var">
                    <Popovers_class pop={pop1} />
                    <Popovers_class pop={pop2} />
                    <Popovers_class pop={pop3} />
                    <Popovers_class pop={pop4} />
                    <Popovers_class pop={pop5} />
                    <Popovers_class pop={pop6} />
                    <Popovers_class pop={pop7} color="1" />
                </div>
                {/*                     
                    <div className="pop_btn_end2">
                        <p>This is a very beautiful popover, show some love.</p>
                    </div>
                    <div className="pop_btn_end3">
                        <p>This is a very beautiful popover, show some love.</p>
                    </div>
                    <div className="pop_btn_end4">
                        <p>This is a very beautiful popover, show some love.</p>
                    </div>
                    <div className="pop_btn_end5">
                        <p>This is a very beautiful popover, show some love.</p>
                    </div>
                    <div className="pop_btn_end6">
                        <p>This is a very beautiful popover, show some love.</p>
                    </div>
                    <div className="pop_btn_end7">
                        <p>This is a very beautiful popover, show some love.</p>
                    </div> */}
            </div>
        )
    }
    onClick = (a) => {
        $(`.${a}`).toggle()
    }
}
export default Popovers;