import { fetch_delete_book } from '../store/slice/booksSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { onShowRate } from '../api/env'

const ListBooksContainer = styled.div`
    h3, th, td{
        text-align: center;
    };
    button{
        margin-left: 10px;
    };
    i{
        font-size: 10px;
        color: orange;
        margin: 0 2px;
    };
`
export default function ListBooks() {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.books)

    const onDeleteBook = () => {
        const modal = document.getElementById('ondeletebook')
        let id = modal.getAttribute('idbook')
        dispatch(fetch_delete_book(id))
    }
    const onDelete = (book) => {
        document.getElementById('ondeletebook').setAttribute('idbook', book.id)
        document.querySelector('.modal-body-nameBook').innerHTML = book.fields.Name
    }
    return (
        <ListBooksContainer className="container">
            <h3>Quản lý truyện</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã sách</th>
                        <th scope="col">Tên sách</th>
                        <th scope="col">Đánh giá</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.length >= 1 && books.map((book, ind) => {
                            return <tr key={ind}>
                                <th scope="row">{ind + 1}</th>
                                <td>{book.id}</td>
                                <td>{book.fields.Name}</td>
                                <td>
                                    {
                                        onShowRate(book.fields['Personal Rating'])
                                    }
                                </td>
                                <td>
                                    <Link to={`/addBooks/${book.id}`} type="button" className="btn btn-primary">Sửa</Link>
                                    <button onClick={() => onDelete(book)} data-toggle="modal" data-target="#ondeletebook" type="button" className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <div className="modal" id='ondeletebook' idbook='' tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Xóa sách</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Bạn muốn xóa sách <b className='modal-body-nameBook'>tên sách</b></p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={onDeleteBook} type="button" className="btn btn-danger" data-dismiss="modal">Xóa</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </ListBooksContainer>
    )
}