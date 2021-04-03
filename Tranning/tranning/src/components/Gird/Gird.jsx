import React from 'react'
import Girl_class from './Girl_class'

class Gird extends React.Component {
    render() {
        var tb01 = {
            td01: "Max container width",
            td02: "None (auto)",
            td03: "540px",
            td04: "720px",
            td05: "960px",
            td06: "1140p",
            size: 16,
            color_td: "#525f7f",
            color_tbody: "#f2f2f2",
            boolean: false
        }
        var tb02 = {
            td01: "Class prefix",
            td02: ".col-",
            td03: ".col-sm-",
            td04: ".col-md-",
            td05: ".col-lg-",
            td06: ".col-xl-",
            size: 14,
            color_td: "#f3a4b5",
            color_tbody: "#fffff",
            boolean: false
        }
        var tb03 = {
            td01: "# of columns",
            td02: "12",
            td03: "",
            td04: "",
            td05: "",
            td06: "",
            size: 16,
            color_td: "#525f7f",
            color_tbody: "#f2f2f2",
            boolean: true
        }
        var tb04 = {
            td01: "Gutter width",
            td02: "30px (15px on each side of a column)",
            td03: "",
            td04: "",
            td05: "",
            td06: "",
            size: 16,
            color_td: "#525f7f",
            color_tbody: "#fffff",
            boolean: true
        }
        var tb05 = {
            td01: "Nestable",
            td02: "Yes",
            td03: "",
            td04: "",
            td05: "",
            td06: "",
            size: 16,
            color_td: "#525f7f",
            color_tbody: "#f2f2f2",
            boolean: true
        }
        var tb06 = {
            td01: "Column ordering",
            td02: "Yes",
            td03: "",
            td04: "",
            td05: "",
            td06: "",
            size: 16,
            color_td: "#525f7f",
            color_tbody: "#fffff",
            boolean: true
        }
        return (
            <div className="container_Gird">
                <h2>How it works</h2>
                <div className="equal">
                    <div className="equal_01">
                        <div className="equal_secondlast">One of three columns</div>
                        <div className="equal_secondlast">One of three columns</div>
                        <div className="equal_secondlast">One of three columns</div>
                    </div>
                </div>
                <h2>Grid options</h2>
                <table border="1" width="100%" className="table000">
                    <thead>
                        <tr className="head_table">
                            <th></th>
                            <th>
                                <p>Extra small</p>
                                <span>&#60;576px</span>
                            </th>
                            <th>
                                <p>Small</p>
                                <span>≥576px</span>
                            </th>
                            <th>
                                <p>Medium</p>
                                <span>≥768px</span>
                            </th>
                            <th>
                                <p>Large</p>
                                <span>≥992px</span>
                            </th>
                            <th>
                                <p>Extra large</p>
                                <span>≥1200px</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <Girl_class tb={tb01} />
                        <Girl_class tb={tb02} />
                        <Girl_class tb={tb03} />
                        <Girl_class tb={tb04} />
                        <Girl_class tb={tb05} />
                        <Girl_class tb={tb06} />
                    </tbody>
                </table>
                <h2>Equal-width</h2>
                <div className="equal">
                    <div className="equal_top">
                        <div className="equal_top_tp">1 of 2</div>
                        <div className="equal_top_tp">2 of 2</div>
                    </div>
                    <div className="equal_bottom">
                        <div className="equal_bottom_bt">1 of 3</div>
                        <div className="equal_bottom_bt">2 of 3</div>
                        <div className="equal_bottom_bt">3 of 3</div>
                    </div>
                </div>
                <div className="equal">
                    <div className="equal_01">
                        <div className="equal_second">Column</div>
                        <div className="equal_second">Column</div>
                        <div className="equal_second">Column</div>
                        <div className="equal_second">Column</div>
                    </div>
                </div>
                <h2>Setting one column width</h2>
                <div className="equal">
                    <div className="equal_top_second">
                        <div className="equal_top_second_tp">1 of 3</div>
                        <div className="equal_top_second_tp">2 of 3 (wider)</div>
                        <div className="equal_top_second_tp">3 of 3</div>
                    </div>
                    <div className="equal_top_second">
                        <div className="equal_top_second_tp">1 of 3</div>
                        <div className="equal_top_second_tp">2 of 3 (wider)</div>
                        <div className="equal_top_second_tp">3 of 3</div>
                    </div>
                </div>
                <h2>Variable width content</h2>
                <div className="equal">
                    <div className="equal_top_var">
                        <div className="equal_top_second_var">1 of 3</div>
                        <div className="equal_top_second_var">Variable width content</div>
                        <div className="equal_top_second_var">3 of 3</div>
                    </div>
                    <div className="equal_top_var_second">
                        <div className="equal_top_second_var">1 of 3</div>
                        <div className="equal_top_second_var">Variable width content</div>
                        <div className="equal_top_second_var">3 of 3</div>
                    </div>
                </div>
                <h2>All breakpoints</h2>
                <div className="equal">
                    <div className="col_top">
                        <div className="col_top_00">col</div>
                        <div className="col_top_00">col</div>
                        <div className="col_top_00">col</div>
                        <div className="col_top_00">col</div>
                    </div>
                    <div className="col_bot">
                        <div className="col_bot_00">col-8</div>
                        <div className="col_bot_00">col-4</div>
                    </div>
                </div>
                <h2>Stacked to horizontal</h2>
                <div className="equal">
                    <div className="Stac_top">
                        <div className="Stac_top_00">col-sm-8</div>
                        <div className="Stac_top_00">col-sm-4</div>
                    </div>
                    <div className="Stac_bot">
                        <div className="Stac_bot_00">col-sm</div>
                        <div className="Stac_bot_00">col-sm</div>
                        <div className="Stac_bot_00">col-sm</div>
                    </div>
                </div>
                <h2>Mix and match</h2>
                <div className="equal">
                    <div className="Mix_top">
                        <div className="Mix_top_00">.col-12 .col-md-8</div>
                        <div className="Mix_top_00">.col-6 .col-md-4</div>
                    </div>
                    <div className="Mix_middle">
                        <div className="Mix_middle_00">.col-6 .col-md-4</div>
                        <div className="Mix_middle_00">.col-6 .col-md-4</div>
                        <div className="Mix_middle_00">.col-6 .col-md-4</div>
                    </div>
                    <div className="Mix_bot">
                        <div className="Mix_bot_00">.col-6m</div>
                        <div className="Mix_bot_00">.col-6m</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gird;