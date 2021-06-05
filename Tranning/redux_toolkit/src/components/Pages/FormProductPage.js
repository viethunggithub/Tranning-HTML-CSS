import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { generateID, generateTime } from '../../random/random'
import { postAddProduct, putEditProduct } from '../../app/productsSlice'
import { fetchPutGetProduct, putGetProduct } from './../../app/editingSlice'

export default function FormProductPage() {
    const history = useHistory()
    const params = useParams()
    const { id } = params
    const editing = useSelector(state => state.editing)
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        txtName: "",
        txtPrice: "",
        txtStatus: false
    })


    const onChange = (e) => {
        const name = e.target.name;
        const val = name === "txtStatus" ? e.target.checked : e.target.value;
        setForm({
            ...form,
            [name]: val
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const product = {
            Code_ID: id ? editing.Code_ID : generateID(),
            name: form.txtName,
            price: form.txtPrice,
            status: form.txtStatus,
            details: {},
            date:generateTime()
        }
        if (id) {
            dispatch(putEditProduct({
                id,
                product
            }))
        } else {
            dispatch(postAddProduct(product))
        }
        dispatch(putGetProduct(null))
        history.push("/")
    }
    const onReset = () => {
        history.push('/formProduct')
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchPutGetProduct(id))
        }
    }, [dispatch, id])

    useEffect(() => {
        if (editing && id) {
            setForm({
                txtName: editing.name,
                txtPrice: editing.price,
                txtStatus: editing.status
            })
            setIsEdit(true)
        }
    }, [editing, id])
    return (
        <div className="container">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form>
                    <legend>{isEdit ? "Edit" : "Add"} Product</legend>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"
                            onChange={onChange} name="txtName" value={form.txtName} />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control"
                            onChange={onChange} name="txtPrice" value={form.txtPrice} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                onChange={onChange} name="txtStatus" checked={form.txtStatus} />
                       Còn Hàng
                   </label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>
                        {isEdit ? "Update" : "Add"}
                    </button>
                    {isEdit === true && <button type="button" className="btn btn-success"
                        style={{ marginLeft: "5px" }} onClick={onReset}>
                        Reset
                        </button>}
                </form>
            </div>
        </div>
    )
}