import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { onShowRate } from '../api/env'
import styled from 'styled-components'

const HomeContainer = styled.div`
    margin-top: 50px;
    h3{
        margin:20px 0 0 0;
    };
    .books_create,.books_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .card{
        margin-top: 20px;
        img{
            height: 260px;
        }
        .card-title,.card-text{
            height: 100%;
            white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            display: -webkit-box
        };
        .card-text{
            font-size: 14px;
            -webkit-line-clamp: 2;
        };
        .card-rate{
            display: flex;
            align-items: center;
            i{
                font-size: 10px;
                color: orange;
                margin: 0 2px;
            };
            a{
                margin-right: 10px;
            }
        }
    }
`
export default function Home() {
    const books = useSelector(state => state.books.books)
    const bookUpdate = useSelector(state => state.books.bookUpdate)
    
    return (
        <HomeContainer className="container">
            <h3>Truyện mới cập nhật</h3>
            <div className="row books_create">
                {
                    bookUpdate.length >= 1 && bookUpdate.map((book, ind) => {
                        if (ind <= 3) {
                            return <div className="col col-3" key={ind}>
                                <div className="card">
                                    <img src={`${book.fields['Cover Photo'][0].url}`} className="card-img-top" alt="Hình ảnh truyện (large)" />
                                    <div className="card-body">
                                        <h5 className="card-title">{book.fields.Name}</h5>
                                        <p className="card-text">{book.fields.Synopsis}</p>
                                        <div className="card-rate">
                                            <Link to={`/detailBooks/${book.id}`} className="btn btn-primary">Xem chi tiết</Link>
                                            <div>
                                                {
                                                    onShowRate(book.fields['Personal Rating'])
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    })
                }
            </div>

            <h3>Danh sách truyện</h3>
            <div className="row books_list">
                {
                    books.map((book, ind) => {
                        return <div className="col col-3" key={ind}>
                            <div className="card">
                                <img src={book.fields['Cover Photo'][0].url} className="card-img-top" alt="Hình ảnh truyện (large)" />
                                <div className="card-body">
                                    <h5 className="card-title">{book.fields.Name}</h5>
                                    <p className="card-text">{book.fields.Synopsis}</p>
                                    <div className="card-rate">
                                        <Link to={`/detailBooks/${book.id}`} className="btn btn-primary">Xem chi tiết</Link>
                                        <div>
                                            {
                                                onShowRate(book.fields['Personal Rating'])
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </HomeContainer>
    )
}