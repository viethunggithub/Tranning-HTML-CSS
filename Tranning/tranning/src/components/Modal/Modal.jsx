import React from 'react'
import $ from 'jquery'

class Modal extends React.Component {
    render() {
        return (
            <div className="Modal">
                <h2>Live demo</h2>
                <button onClick={() => this.onClick("modal_body", "modal_alert")}>launch demo momdal</button>
                <div className="modal_body">
                    <div className="modal_alert">
                        <div className="modal_header">
                            <h5>Modal title</h5>
                            <i className="fas fa-times" onClick={() => { this.onClose("modal_body") }}></i>
                        </div>
                        <div className="modal_middle">
                            <p>Woohoo, you're reading this text in a modal!</p>
                        </div>
                        <div className="modal_footer">
                            <button onClick={() => { this.onClose("modal_body") }}>CLOSE</button>
                            <button>SAVE CHANGES</button>
                        </div>
                    </div>
                </div>
                <h2>Scrolling long content</h2>
                <button onClick={() => this.onClick("modal_scroll", "modal_scoll_alert")}>launch demo momdal</button>
                <div className="modal_scroll">
                    <div className="modal_scoll_alert">
                        <div className="modal_header">
                            <h5>Modal title</h5>
                            <i className="fas fa-times" onClick={() => { this.onClose("modal_scroll") }} ></i>
                        </div>
                        <div className="modal_middle">
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        </div>
                        <div className="modal_footer">
                            <button onClick={() => { this.onClose("modal_scroll") }}>CLOSE</button>
                            <button>SAVE CHANGES</button>
                        </div>
                    </div>
                </div>
                <h2>Tooltips and popovers</h2>
                <button className="hideShow" onClick={() => this.onClick("modal_tool", "modal_tool_pop","hideShow")}>launch demo momdal</button>
                <div className="modal_tool">
                    <div className="modal_tool_pop">
                        <div className="modal_header">
                            <h5>Modal title</h5>
                            <i className="fas fa-times"  onClick={() => { this.onClose("modal_tool","hideShow") }}></i>
                        </div>
                        <div className="modal_middle">
                            <h5>Popover in a modal</h5>
                            <p>This <button onClick={() => { this.onClickShowBtn() }}>BUTTON</button> triggers a popover on click.
                            <div className="modal_middle_btn">
                                    <h5>Popover title</h5>
                                    <p>Popover body content is set in this attribute.</p>
                                </div>
                            </p>
                        </div>
                        <div className="modal_middle">
                            <h5>Tooltips in a modal</h5>
                            <p><a href="" onMouseOver={() => { this.onHover("span1") }}
                                onMouseLeave={() => { this.onLeave("span1") }}
                            >This link
                            <span className="span1">Tooltips</span>
                            </a> and <a href="" onMouseOver={() => { this.onHover("span2") }}
                                onMouseLeave={() => { this.onLeave("span2") }}
                            >that link
                            <span className="span2">Tooltips</span>
                                </a> have tooltips on hover.</p>
                        </div>
                        <div className="modal_footer">
                            <button onClick={() => { this.onClose("modal_tool","hideShow") }}>CLOSE</button>
                            <button>SAVE CHANGES</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    onClickShowBtn = () => {
        $(".hideShow").hide()
        var has = $(".modal_middle_btn").hasClass("daicahung")
        if (has) {
            $(".modal_middle_btn").hide();
            $(".modal_middle_btn").removeClass("daicahung")
        } else {
            $(".modal_middle_btn").show();
            $(".modal_middle_btn").addClass("daicahung")
        }
    }
    onHover = (a) => {
        $(`.${a}`).show()
    }
    onLeave = (a) => {
        $(`.${a}`).hide()
    }
    onClose = (b,d) => {
        $(`.${b}`).hide()
        $(`.${d}`).show()
    }
    onClick = (b, a,d) => {
        $(`.${b}`).show()
        $(`.${a}`).slideDown(400)
        $(document).mousedown(function (e) {
            var xy_modal_alert = $(`.${a}`).offset()
            var modal_alert = $(`.${a}`)
            var mouseX = e.pageX
            var mouseY = e.pageY
            if (xy_modal_alert != undefined && modal_alert != undefined) {
                if (mouseX >= xy_modal_alert.left && mouseX <= xy_modal_alert.left + modal_alert.width() & mouseY >= xy_modal_alert.top && mouseY <= xy_modal_alert.top + modal_alert.height()) {
                    return false
                } else {
                    $(`.${b}`).hide()
                    $(`.${d}`).show()
                }
            }
        })
    }

}
export default Modal;