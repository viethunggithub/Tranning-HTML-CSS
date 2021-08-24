import { Link } from 'react-router-dom'
import { fetch_sort_book, fetch_search_book } from '../store/slice/booksSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.books)
    const onSortBook = (e) => {
        let key = null
        switch (e) {
            case 'Name A - Z':
                key = {
                    params1: 'Name',
                    params2: 'asc'
                }
                break;
            case 'Name Z - A':
                key = {
                    params1: 'Name',
                    params2: 'desc'
                }
                break;
            default:
                key = {
                    params1: 'Personal+Rating',
                    params2: 'desc'
                }
        }
        dispatch(fetch_sort_book(key))
    }
    const onSearch = (e) => {
        let key = e.target.value
        dispatch(fetch_search_book(key))
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <b className="navbar-brand" >Books</b>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">Trang chủ <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/listbooks' className="nav-link">Quản lý truyện</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/addBooks' className="nav-link">Thêm truyện</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sắp xếp
                        </span>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <span onClick={() => onSortBook('Name A - Z')} className="dropdown-item" href="#">Name A - Z</span>
                            <span onClick={() => onSortBook('Name Z - A')} className="dropdown-item" href="#">Name Z - A</span>
                            <span onClick={() => onSortBook('Rate')} className="dropdown-item" href="#">Rate</span>
                            <div className="dropdown-divider"></div>
                            <span className="dropdown-item" href="#">Help</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <form className="form-inline my-2 my-lg-0">
                            <input onChange={onSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </li>
                </ul>

            </div>
        </nav>
    )
}