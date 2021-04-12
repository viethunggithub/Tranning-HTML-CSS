import React from 'react'

class Breadcrumb extends React.Component{
    render(){
        return(
            <div className="Breadcrumb">
                <h2 id="overviewss">Overview</h2>
                <div className="Overview">
                    <div className="sub_overview">
                        <p>Home</p>
                    </div>
                    <div className="sub_overview">
                        <a href="#overview" className="a1">Home</a>
                        <p>Libary</p>
                    </div>
                    <div className="sub_overview">
                        <a href="#overview" className="a1">Home</a>
                        <a href="#overview" className="a1">Libary</a>
                        <p>Data</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Breadcrumb;