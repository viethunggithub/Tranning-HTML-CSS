export const URL_SERVER = `https://test-server-nodejs-courses.herokuapp.com/courses`
// https://api.airtable.com/v0/meta/bases
export const onShowRate = (rate) => {
    switch (rate) {
        case 5:
            return <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        case 4:
            return <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        case 3:
            return <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        case 2:
            return <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        case 1:
            return <div>
                <i className="fas fa-star"></i>
            </div>
        default:
            return ''
    }
}