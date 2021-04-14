import React from 'react'
import Forms_class from './Forms_class'
import $ from 'jquery'

class Forms extends React.Component {
    render() {
        var form1 = {
            color: "#cad1d7",
            text: "name@Example.com"
        }
        var form3 = {
            color: "",
            text: "Search"
        }
        var form5 = {
            color: "#2dce89",
            text: "Success"
        }
        var form2 = {
            color: "",
            text: "Regular"
        }
        var form4 = {
            color: "",
            text: "Birthday"
        }
        var form6 = {
            color: "#fb6340",
            text: "Error input"
        }
        return (
            <div className="Forms">
                <h2>Form controls</h2>
                <div className="Forms_main">
                    <Forms_class form={form1} />
                    <Forms_class form={form2} disable="1" />
                    <Forms_class form={form3} supports="1" supp="1" />
                    <Forms_class form={form4} supports="1" supp="1" />
                    <Forms_class form={form5} supp="1" />
                    <Forms_class form={form6} support="1" supp="1" />
                </div>
                <h2>Textarea</h2>
                <div className="textarea">
                    <textarea rows="3" cols="20" placeholder="Write a large text here..."></textarea>
                </div>
                <h2>Checkboxes</h2>
                <div className="checkboxes">
                    <div className="checkbox_a">
                        <input type="checkbox" />
                        <label>Unchecked</label>
                    </div>
                    <div className="checkbox_a">
                        <input defaultChecked type="checkbox" />
                        <label>Checked</label>
                    </div>
                    <div className="checkbox_a">
                        <input disabled type="checkbox" />
                        <label>Disable Unchecked</label>
                    </div>
                    <div className="checkbox_a">
                        <input defaultChecked disabled type="checkbox" />
                        <label>Disable Checked</label>
                    </div>
                </div>
                <h2>Radio buttons</h2>
                <div className="checkboxes">
                    <div className="checkbox_a">
                        <input name="hung" type="radio" />
                        <label>Unchecked</label>
                    </div>
                    <div className="checkbox_a">
                        <input name="hung" defaultChecked type="radio" />
                        <label>Checked</label>
                    </div>
                    <div className="checkbox_a">
                        <input name="hung" disabled type="radio" />
                        <label>Disable Unchecked</label>
                    </div>
                    <div className="checkbox_a">
                        <input name="hung" defaultChecked disabled type="radio" />
                        <label>Disable Checked</label>
                    </div>
                </div>
                <h2>Toggle buttons</h2>
                <div className="toggle_btn">
                    <div className="toggle" onClick={() => this.onToggle_btn("toggle")}>
                        <span></span>
                    </div>
                    <div className="toggle1" onClick={() => this.onToggle_btn("toggle1")}>
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }
    onToggle_btn = (a) => {
        var has = $(`.${a}`).hasClass("coKhong")
        if (has) {
            $(`.${a}`).css("border-color", "#dddddd")
            $(`.${a}`).find("span").css({
                "background": "#dddddd",
                "left": "3px",
                "right":""
            })
            $(`.${a}`).removeClass("coKhong")
        } else {
            $(`.${a}`).css("border-color", "blue")
            $(`.${a}`).find("span").css({
                "background": "blue",
                "right": "3px",
                "left":""
            })
            $(`.${a}`).addClass("coKhong")
        }

    }
}
export default Forms;