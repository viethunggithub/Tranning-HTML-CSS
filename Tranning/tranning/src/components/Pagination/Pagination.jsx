import React from 'react'

class Pagination extends React.Component {
    render() {
        return (
            <div className="Pagination">
                <h2>Examples</h2>
                <div className="Pagination_main">
                    <span>&lsaquo;</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>&rsaquo;</span>
                </div>
                <h2>Disabled and active states</h2>
                <div className="Pagination_main Pag_disable">
                    <span>&lsaquo;</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>&rsaquo;</span>
                </div>
                <h2>Sizing</h2>
                <div className="Pagination_main Pag_size1">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div className="Pagination_main Pag_size2">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <h2>Alignment</h2>
                <div className="Pagination_main Pag_align Pag_disable">
                    <span>&lsaquo;</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>&rsaquo;</span>
                </div>
                <div className="Pagination_main Pag_right Pag_disable">
                    <span>&lsaquo;</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>&rsaquo;</span>
                </div>
            </div>
        )
    }
}
export default Pagination;