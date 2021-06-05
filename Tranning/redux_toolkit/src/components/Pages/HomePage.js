import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import moment from 'moment'
import { fetchGetProduct, deleteDelProduct } from './../../app/productsSlice'


export default function HomePage() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const onDelete = (product) => {
        if (confirm(`Bạn muốn xóa sản phẩm ${product.name} này?`)) {//eslint-disable-line
            dispatch(deleteDelProduct(product))
        }
    }

    useEffect(() => {
        dispatch(fetchGetProduct())
    }, [dispatch])
    return (
        <>
            <div className="container">
                <legend style={{ textAlign: "center", fontWeight: "600" }}>Danh sách sản phẩm trong kho hàng</legend>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Code_ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.Code_ID}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            {
                                                product.status ? <button type="button" className="btn btn-success">Còn Hàng</button> : <button type="button" className="btn btn-warning">Hết Hàng</button>
                                            }
                                        </td>
                                        <td>
                                            <Link to={`/detailsProduct/${product.id}`}>Details</Link>
                                        </td>
                                        <td>
                                            {
                                                moment(`${product.date}`).fromNow()
                                            }
                                        </td>
                                        <td>
                                            <Link to={`/formProduct/${product.id}`} type="button" className="btn btn-primary" style={{ marginRight: "5px" }}
                                            >Edit</Link>
                                            <button type="button" className="btn btn-danger" onClick={() => onDelete(product)}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
