import React from 'react'

class Girl_class extends React.Component {
    render() {
        var { tb } = this.props;
        var div;
        if (tb.boolean) {
            div = <tr style={{ background: tb.color_tbody }}>
                <td><p>{tb.td01}</p></td>
                <td style={{ color: tb.color_td }} colSpan="5">{tb.td02}</td>
            </tr>
        }else{
            div = <tr style={{background:tb.color_tbody}}>
                <td><p>{tb.td01}</p></td>
                <td style={{color:tb.color_td}}>{tb.td02}</td>
                <td style={{color:tb.color_td}}>{tb.td03}</td>
                <td style={{color:tb.color_td}}>{tb.td04}</td>
                <td style={{color:tb.color_td}}>{tb.td05}</td>
                <td style={{color:tb.color_td}}>{tb.td06}</td>
            </tr>
        }
        return (
            div
        )
    }
}
export default Girl_class;