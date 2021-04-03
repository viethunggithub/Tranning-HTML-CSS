import React from 'react'

class NotFound extends React.Component {
    render() {
        return (
            <div className="alert alert-warning">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>404!</strong> Không tìm thấy trang
            </div>
        )
    }
}
export default NotFound;