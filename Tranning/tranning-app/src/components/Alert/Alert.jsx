import React from 'react'
import Alert from './Main'

let Alert01 = {
    background: "#7645d9",
    text: "Info"
}
let Alert02 = {
    background: "#31d0aa",
    text: "Success"
}
let Alert03 = {
    background: "#ffb237",
    text: "Warning"
}
let Alert04 = {
    background: "#ed4b9e",
    text: "Danger"
}
const Main = (props) => {

    return (
        <div style={{margin:"100px 0 100px 200px"}}>
            <div>
                <Alert alert={Alert01} />
                <Alert alert={Alert02} a1 />
                <Alert alert={Alert03} b1 />
                <Alert alert={Alert04} c1 />
            </div>
            <hr/>
            <div>
                <Alert alert={Alert01} min exit/>
                <Alert alert={Alert02} a1 max="true"  exit/>
                <Alert alert={Alert04} c1 min text exit/>
                <Alert alert={Alert03} b1 min  exit/>
            </div>
        </div>
    )
}
export default Main;