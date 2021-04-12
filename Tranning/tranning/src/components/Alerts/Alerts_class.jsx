import React from 'react'

class Alerts_class extends React.Component{
    render(){
        var {alert, have} = this.props
        var text1 = have === undefined ? alert.text : alert.link_color.p1;
        var text2 = have ===undefined ? "" : alert.link_color.p2;
        var text3 = have === undefined ? "" : <a href="#Alerts" className="link_color">an example link</a>
        return(
            <p className="Alerts_item" style={{background:alert.background}}>
                {text1}
                {text3}
                {text2}
            </p>
        )
    }
}
export default Alerts_class;
