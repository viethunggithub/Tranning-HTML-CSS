import React from 'react'
import { Link } from 'react-router-dom'

class Result extends React.Component {
    render() {
        return (
            <div className="result">
                <Link to="/Colors">Colors</Link><br />
                <Link to="/Gird">Gird</Link><br />
                <Link to="/Typography">Typography</Link>
            </div>
        )
    }
}
export default Result;