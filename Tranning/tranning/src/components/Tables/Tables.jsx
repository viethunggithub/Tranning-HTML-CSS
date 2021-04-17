import React from 'react'
import Tables_class from './Tables_class'

class Tables extends React.Component {
    render() {
        var table1 = {
            stt:1,
            text1:'Andrew Mike',
            text2:"Develop",
            text3:"2013",
            text4:"€ 99,225"
        }
        var table2 = {
            stt:2,
            text1:'John Doe',
            text2:"Design",
            text3:"2012",
            text4:"€ 89,241"
        }
        var table3 = {
            stt:3,
            text1:'Alex Mike',
            text2:"Design",
            text3:"2010",
            text4:"€ 92,144"
        }
        return (
            <div className="Tables">
                <h2>Examples</h2>
                <div className="Tables_main">
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Job Position</th>
                                <th>Since</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <Tables_class table={table1}/>
                        <Tables_class table={table2} />
                        <Tables_class table={table3} />
                    </table>
                </div>
            </div>
        )
    }
}
export default Tables;