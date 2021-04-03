import React from 'react'

class Colors_class extends React.Component {
    render() {
        var { b } = this.props;
        return (
            <div className="container_Color">
                <div className="main">
                    <div className="main_top" style={{ background: b.background }}>
                        <div className="main_top_text">
                            <div className="main_top_left">
                                <p>A</p>
                                <p>FAIL</p>
                            </div>
                            <div className="main_top_right">
                                <p>A</p>
                                <p>PASS</p>
                            </div>
                        </div>
                    </div>
                    <div className="main_bottom">
                        <div className="main_bottom_left">
                            <p>NAME</p>
                            <p>{b.bottom_left}</p>
                        </div>
                        <div className="main_bottom_right">
                            <p>HEX</p>
                            <p>{b.bottom_right}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Colors_class;