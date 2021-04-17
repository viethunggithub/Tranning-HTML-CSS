import React from 'react'

class Tables_class extends React.Component {
    render() {
        var { table } = this.props
        return (
            <tbody>
                <tr>
                    <td>{table.stt}</td>
                    <td>{table.text1}</td>
                    <td>{table.text2}</td>
                    <td>{table.text3}</td>
                    <td>{table.text4}</td>
                    <td>
                        <i className="fas fa-id-badge"></i>
                        <i className="fas fa-cog"></i>
                        <i className="fas fa-times"></i>
                    </td>
                </tr>
            </tbody>
        )
    }
}
export default Tables_class;