import React from 'react'
import Badge_class from './Badge_class'
import Badge_class_a from './Badge_class_a'

class Badge extends React.Component {
    render() {
        var a1 = {
            background: "#5e72e4",
            text: "PRIMARY"
        }
        var a2 = {
            background: "#11cdef",
            text: "INFO"
        }
        var a3 = {
            background: "#2dce89",
            text: "SUCCESS"
        }
        var a4 = {
            background: "#f5365c",
            text: "DANGER"
        }
        var a5 = {
            background: "#fb6340",
            text: "WARNING"
        }
        var a6 = {
            background: "#172b4d",
            text: "DEFAULT"
        }
        var a7 = {
            background: "#f4f5f7",
            text: "SECONDARY"
        }
        return (
            <div id="lenDau" className="Badge">
                <h2>Example</h2>
                <div className="notification">
                    <p>notifications</p>
                    <div className="icon">4</div>
                </div>
                <h2>Contextual variations</h2>
                <div className="Badge_context">
                    <Badge_class a={a1} />
                    <Badge_class a={a2} />
                    <Badge_class a={a3} />
                    <Badge_class a={a4} />
                    <Badge_class a={a5} />
                    <Badge_class a={a6} />
                    <Badge_class a={a7} has="1" />
                </div>
                <h2>Pill badges</h2>
                <div className="Badge_context">
                    <Badge_class a={a1} hass="1" />
                    <Badge_class a={a2} hass="1" />
                    <Badge_class a={a3} hass="1" />
                    <Badge_class a={a4} hass="1" />
                    <Badge_class a={a5} hass="1" />
                    <Badge_class a={a6} hass="1" />
                    <Badge_class a={a7} hass="1" has="1" />
                </div>
                <h2>Links</h2>
                <div className="Badge_context">
                    <Badge_class_a a={a1} />
                    <Badge_class_a a={a2} />
                    <Badge_class_a a={a3} />
                    <Badge_class_a a={a4} />
                    <Badge_class_a a={a5} />
                    <Badge_class_a a={a6} />
                    <Badge_class_a a={a7} has="1" />
                </div>
            </div>
        )
    }
}
export default Badge;