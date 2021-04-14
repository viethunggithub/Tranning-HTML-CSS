import React from 'react'
import { Link } from 'react-router-dom'

class Result extends React.Component {
    render() {
        return (
            <div className="result">
                <Link to="/Colors">Colors</Link>
                <Link to="/Gird">Gird</Link>
                <Link to="/Typography">Typography</Link>
                <Link to="/Alerts">Alerts</Link>
                <Link to="/Badge">Badge</Link>
                <Link to="/Breadcrumb">Breadcrumb</Link>
                <Link to="/Buttons">Buttons</Link>
                <Link to="/Carousel">Carousel</Link>
                <Link to="/Dropdowns">Dropdowns</Link>
                <Link to="/Forms">Forms</Link>
                <Link to="/Images">Images</Link>
                <Link to="/Modal">Modal</Link>
                <Link to="/Navs">Navs</Link>
            </div>
        )
    }
}
export default Result;