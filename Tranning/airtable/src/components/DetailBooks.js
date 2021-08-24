import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_get_book, fetch_get_author } from '../store/slice/booksSlice'

const DetailBooksContainer = styled.div`
    margin-top: 50px;
    .detailBooks{
        display: flex;
        margin-bottom: 20px;
        .detailBooks_main{
            display: flex;
            img{
                width: 200px;
                height: 300px;
                margin-right: 10px;
            };
            ._mainBooks{
                height: 100px;
                overflow: hidden;
                margin-top: 20px;
                ._mainContent{
                    height: 100%;
                    white-space: pre-wrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                }
            };
            button{
                position: relative;
                padding-right: 18px;
                ::before{
                    content: "";
                    position: absolute;
                    top: 12px;
                    right: 0;
                    height: 10px;
                    width: 10px;
                    border-top: 2px solid;
                    border-left: 2px solid;
                    transform: rotate(-135deg);
                }
            };
        };
        .detailBooks_other{
            button{
                margin:0 10px 20px 0;
            }
        }
    };
    .rateBooks{
        .star_total{
            display: flex;
            align-items: center;
            color: orange;
            p{
                margin: 0;
                color:#000000;
            };
            .star_main{
                margin: 0 6px;
                i{
                    margin: 0 2px;
                    cursor: pointer;
                }
            }
        };
        .item_rate{
            display: flex;
            font-size: 14px;
            align-items: center;
            i{
                margin: 4px;
                font-size: 10px;
            }
            p{
                margin: 0;
            };
            .percent{
                height: 4px;
                width: 150px;
                background: #EEEEEE;
                margin-right:8px;
                .percent_sub{
                    width: 75%;
                    background-color: orange;
                    height: 4px;
                }
            }
        }
    };
    .commentBooks{
        margin-top: 10px;
        .item_comment{
            i{
                color:orange
            };
            span{
                font-weight: bold;
            }
        }
    }
`
export default function DetailBooks() {
    const dispatch = useDispatch()
    const params = useParams()
    const book = useSelector(state => state.books.book)
    const author = useSelector(state => state.books.author)
    useEffect(() => {
        if (params) {
            dispatch(fetch_get_book(params))
        }
    }, [params])
    useEffect(() => {
        if (book) {
            dispatch(fetch_get_author(book.fields.Author[0]))
        }
    }, [book])
    const onShowMore = () => {
        const _mainBooks = document.querySelector('._mainBooks')
        const _mainContent = document.querySelector('._mainContent')
        const viewMore = document.querySelector('.viewMore')
        if (viewMore.innerHTML === 'Xem thêm') {
            _mainContent.style.display = 'block'
            _mainBooks.style.height = 'auto'
            viewMore.innerHTML = 'Rút gọn'
        } else {
            _mainContent.style.display = '-webkit-box'
            _mainBooks.style.height = '100px'
            viewMore.innerHTML = 'Xem thêm'
        }

    }
    return (
        <DetailBooksContainer className="container">
            <div className="row detailBooks">
                <div className="col col-8">
                    <div className="detailBooks_main">
                        <img src={`${book != null && book.fields['Cover Photo'][0].url}`} alt="" />
                        <div className="_main">
                            <h4>{book != null && book.fields.Name}</h4>
                            <span>Author: <b>{author != '' && author}</b></span>
                            <div className='_mainBooks'>
                                <p className='_mainContent'>{book != null && book.fields.Synopsis}</p>
                            </div>
                            <button onClick={onShowMore} type="button" className="btn btn-link viewMore">Xem thêm</button>
                        </div>
                    </div>
                </div>
                <div className="col col-4">
                    <div className="detailBooks_other">
                        <button type="button" className="btn btn-success">Mua sách</button>
                        <button type="button" className="btn btn-danger">Đọc</button>
                        <p><b>Số trang :</b></p>
                        <p><b>Quốc gia :</b></p>
                        <p><b>Thể loại :</b></p>
                        <p><b>Phát hành :</b></p>
                    </div>
                </div>
            </div>
            <div className="rateBooks">
                <h2>Đánh giá về sách <b>{book != null && book.fields.Name}</b></h2>
                <div className="rateBooks_star">
                    <div className="star_total">
                        <h2>3.8</h2>
                        <div className="star_main">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>502 đánh giá</p>
                    </div>
                </div>
                <div className="star_percent">
                    <div className="item_rate">
                        <p>5</p>
                        <i className="fas fa-star"></i>
                        <div className='percent'>
                            <div className='percent_sub'></div>
                        </div>
                        <p>54%</p>
                    </div>
                    <div className="item_rate">
                        <p>4</p>
                        <i className="fas fa-star"></i>
                        <div className='percent'>
                            <div className='percent_sub'></div>
                        </div>
                        <p>51%</p>
                    </div>
                    <div className="item_rate">
                        <p>3</p>
                        <i className="fas fa-star"></i>
                        <div className='percent'>
                            <div className='percent_sub'></div>
                        </div>
                        <p>23%</p>
                    </div>
                    <div className="item_rate">
                        <p>2</p>
                        <i className="fas fa-star"></i>
                        <div className='percent'>
                            <div className='percent_sub'></div>
                        </div>
                        <p>64%</p>
                    </div>
                    <div className="item_rate">
                        <p>1</p>
                        <i className="fas fa-star"></i>
                        <div className='percent'>
                            <div className='percent_sub'></div>
                        </div>
                        <p>23%</p>
                    </div>
                </div>
            </div>
            <div className="commentBooks">
                <h2>Bình luận</h2>
                <div className="item_comment">
                    <span>User</span>
                    <div className="comment_star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Nội dung comment</p>
                </div>
                <div className="item_comment">
                    <span>User</span>
                    <div className="comment_star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>Nội dung comment</p>
                </div>
            </div>
        </DetailBooksContainer>
    )
}