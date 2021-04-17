import React from 'react'
import Tooltips_class from './Tooltips_class'

class Tooltips extends React.Component{
    render(){
        var too5 = {
            text:"DANGER",
            background:"#F5365C"
        }
        var too1 = {
            text:"PRIMARY",
            background:"#5E72E4"
        }
        var too2 = {
            text:"INFO",
            background:"#11CDEF"
        }
        var too3 = {
            text:"SUCCESS",
            background:"#2DCE89"
        }
        var too4 = {
            text:"WARNING",
            background:"#FB6340"
        }
        var too6 = {
            text:"DEFAULT",
            background:"#172B4D"
        }
        var too7 = {
            text:"SECONDARY",
            background:"#F4F5F7"
        }
        var too8 = {
            text:"ON LEFT",
            background:"#5E72E4"
        }
        var too9 = {
            text:"ON TOP",
            background:"#5E72E4"
        }
        var too10 = {
            text:"ON BOTTOM",
            background:"#5E72E4"
        }
        var too11 = {
            text:"ON RIGHT",
            background:"#5E72E4"
        }
        return(
            <div className="Tooltips">
                <h2>Example</h2>
                <div className="Too_main">
                    <Tooltips_class too={too1}/>
                    <Tooltips_class too={too2} />
                    <Tooltips_class too={too3} />
                    <Tooltips_class too={too4} />
                    <Tooltips_class too={too5} />
                    <Tooltips_class too={too6} />
                    <Tooltips_class too={too7} too_color="1"/>
                </div>
                <h2>Position</h2>
                <div className="Too_main">
                   <Tooltips_class too={too8} position="Tooltip on left"/>
                   <Tooltips_class too={too9} position="Tooltip on top"/>
                   <Tooltips_class too={too10} position="Tooltip on bottom"/>
                   <Tooltips_class too={too11} position="Tooltip on right"/>
                </div>
            </div>
        )
    }
}
export default Tooltips;