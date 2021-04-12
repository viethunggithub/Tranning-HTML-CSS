import React from 'react'
import Alerts_class from './Alerts_class'
import {Link} from 'react-router-dom'

class Alerts extends React.Component {
    render() {
        var alert01 = {
            background:"#7889e8",
            text:"This is a primary alert—check it out!",
            link_color:{
                p1:`This is a primary alert with `,
                p2:`. Give it a click if you like.`
            }
        }
        var alert02 = {
            background:"#37d5f2",
            text:"This is a info alert—check it out!",
            link_color:{
                p1:`This is a info alert with `,
                p2:`. Give it a click if you like.`
            }
        }
        var alert03 = {
            background:"#4fd69c",
            text:"This is a success alert—check it out!",
            link_color:{
                p1:`This is a success alert with `,
                p2:`. Give it a click if you like.`
            }
        }
        var alert04 = {
            background:"#f75676",
            text:"This is a danger alert—check it out!",
            link_color:{
                p1:`This is a danger alert with `,
                p2:`. Give it a click if you like.`
            }
        }
        var alert05 = {
            background:"#fc7c5f",
            text:"This is a warning alert—check it out!",
            link_color:{
                p1:`This is a warning alert with `,
                p2:`. Give it a click if you like.`
            }
        }
        var alert06 = {
            background:"#3c4d69",
            text:"This is a default alert—check it out!",
            link_color:{
                p1:`This is a default alert with `,
                p2:`. Give it a click if you like.`
            }
        }
        var alert07 = {
            background:"#f6f7f8",
            text:"This is a secondary alert—check it out!",
            link_color:{
                p1:`This is a secondary alert with `,
                p2:`. Give it a click if you like.`
            }
        }
        return (
            <div className="Alerts">
                <h2 id="Alerts">Examples</h2>
                <Alerts_class alert = {alert01} />
                <Alerts_class alert = {alert02} />
                <Alerts_class alert = {alert03} />
                <Alerts_class alert = {alert04} />
                <Alerts_class alert = {alert05} />
                <Alerts_class alert = {alert06} />
                <Alerts_class alert = {alert07} />
                <h2>Link color</h2>
                <Alerts_class alert = {alert01} have = "1" />
                <Alerts_class alert = {alert02} have = "1" />
                <Alerts_class alert = {alert03} have = "1" />
                <Alerts_class alert = {alert04} have = "1" />
                <Alerts_class alert = {alert05} have = "1" />
                <Alerts_class alert = {alert06} have = "1" />
                <Alerts_class alert = {alert07} have = "1" />
                <h2>Dismissing</h2>
                <p className="Alerts_item" style={{background:`#37d5f2`}}><strong>Heads up! - </strong>This is a regular notification made with ".alert-info"</p>
            </div>
        )
    }
}
export default Alerts;