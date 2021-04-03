import React from 'react'
import Colors_class from './Colors_class'
import Light_class from './Light_class';


class Colors extends React.Component {
    render() {
        var b01 = {
            background:"#5e72e4",
            bottom_left:"Primary",
            bottom_right:"#007bff"
        };
        var b02 = {
            background:"#11cdef",
            bottom_left:"Info",
            bottom_right:"#17a2b8"
        };
        var b03 = {
            background:"#2dce89",
            bottom_left:"Success",
            bottom_right:"#28a745"
        }
        var b04 = {
            background:"#f5365c",
            bottom_left:"Danger",
            bottom_right:"#dc3545"
        }
        var b05 = {
            background:"#fb6340",
            bottom_left:"Warning",
            bottom_right:"#ffc107"
        }
        var b06 = {
            background:"#172b4d",
            bottom_left:"Default",
            bottom_right:"#ffc107"
        }
        var b07 = {
            background:"#f4f5f7",
            bottom_left:"Secondary",
            bottom_right:"#f4f5f7"
        }
        var box01 = {
            background:"#f6f9fc",
            text_Box:"Gray 100",
            text_Color:"#f6f9fc"
        }
        var box02 = {
            background:"#e9ecef",
            text_Box:"Gray 200",
            text_Color:"#e9ecef"
        }
        var box03 = {
            background:"#e3e3e3",
            text_Box:"Gray 300",
            text_Color:"#e3e3e3"
        }
        var box04 = {
            background:"#ced4da",
            text_Box:"Gray 400",
            text_Color:"#ced4da"
        }
        var box05 = {
            background:"#adb5bd",
            text_Box:"Gray 500",
            text_Color:"#adb5bd"
        }
        var box06 = {
            background:"#6c757d",
            text_Box:"Gray 600",
            text_Color:"#6c757d"
        }
        var box07 = {
            background:"#525f7f",
            text_Box:"Gray 700",
            text_Color:"#525f7f"
        }
        var box08 = {
            background:"#32325d",
            text_Box:"Gray 800",
            text_Color:"#32325d"
        }
        var box09 = {
            background:"#212529",
            text_Box:"Gray 900",
            text_Color:"#212529"
        }

        return (
            <div className="colorsMain">
                <h2>Primary colors</h2>
                <div className="Colors">
                    <Colors_class b = {b01} />
                    <Colors_class b = {b02} />
                    <Colors_class b = {b03} />
                    <Colors_class b = {b04} />
                    <Colors_class b = {b05} />
                    <Colors_class b = {b06} />
                    <Colors_class b = {b07} />
                </div>
                <h2>Light neutrals</h2>
                <table className="table_Color">
                    <tbody>
                        <Light_class box = {box01} />
                        <Light_class box = {box02} />
                        <Light_class box = {box03} />
                        <Light_class box = {box04} />
                        <Light_class box = {box05} />
                        <Light_class box = {box06} />
                        <Light_class box = {box07} />
                        <Light_class box = {box08} />
                        <Light_class box = {box09} />
                    </tbody>
                </table>

            </div>
        )
    }
}
export default Colors;