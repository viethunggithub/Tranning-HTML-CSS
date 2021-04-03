import React from 'react'

class Light_class extends React.Component {
    render() {
        var { box } = this.props;
        return (
            <tr>
                <td className="box_Color">
                    <div className="box_Color_left" style={{ background: box.background }}></div>
                    <p>{box.text_Box}</p>
                </td>
                <td className="text_Color">
                    <p>HEX</p>
                    <p>{box.text_Color}</p>
                </td>
            </tr>
        )
    }
}
export default Light_class;