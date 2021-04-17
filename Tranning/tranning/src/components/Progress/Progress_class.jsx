import React from 'react'

class Progress_class extends React.Component {
    render() {
        var { pro } = this.props
        return (
            <div className="Pro_main">
                <p>TASK COMPLETED</p>
                <strong>60%</strong>
                <div className="Pro_total">
                    <div className="Pro_sub" style={{background:pro.background}}></div>
                </div>
            </div>
        )
    }
}
export default Progress_class;