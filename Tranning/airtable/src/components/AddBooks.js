import { fetch_post_book, fetch_editing, fetch_put_book, get_editing } from '../store/slice/booksSlice'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const AddBooksContainer = styled.div`
    .addBooks{
        display: flex;
        .content_addBooks{
            display: flex;
            flex-direction: column;
            textarea{
                padding:10px;
                outline: none;
            }
        };
        .preview{
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            img{
                width: 180px;
                height: 250px;
                margin-bottom: 10px;
            }
        };
        h5{
            margin-top: 10px;
        };
        input[type='checkbox']{
            margin-left: 20px;
        }
    }
`
export default function AddBooks() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const editing = useSelector(state => state.books.editing)
    const [form, setForm] = useState({
        'Personal Notes': '',
        'Name': '',
        'Author': [],
        'Cover Photo1': '',
        'Cover Photo2': '',
        'Bought?': false,
        'Synopsis': '',
        'Read?': false,
        'Personal Rating': ''
    })
    const onChange = (e) => {
        switch (e.target.name) {
            case 'Bought?':
                setForm({
                    ...form,
                    'Bought?': e.target.checked
                })
                break;
            case 'Read?':
                setForm({
                    ...form,
                    'Read?': e.target.checked
                })
                break;
            case 'Author':
                setForm({
                    ...form,
                    Author: [`${e.target.value}`]
                })
                break;
            default:
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                })
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        let fields = {
            'Personal Notes': form['Personal Notes'],
            'Name': form['Name'],
            'Author': form['Author'],
            'Cover Photo': [{
                url: form['Cover Photo1']
            },
            {
                url: form['Cover Photo2']
            }],
            'Bought?': form['Bought?'],
            'Synopsis': form['Synopsis'],
            'Read?': form['Read?'],
            'Personal Rating': form['Personal Rating']
        }
        if (editing) {
            dispatch(fetch_put_book({
                id,
                data: {
                    "fields": fields,
                    "typecast": true
                }
            }))
        } else {
            dispatch(fetch_post_book({
                "records": [{ fields }],
                "typecast": true
            }))
        }
        dispatch(get_editing(null))
        history.push('/listbooks')
        setForm({
            'Personal Notes': '',
            'Name': '',
            'Author': [],
            'Cover Photo1': '',
            'Cover Photo2': '',
            'Bought?': false,
            'Synopsis': '',
            'Read?': false,
            'Personal Rating': ''
        })
    }
    useEffect(() => {
        id != '' && editing != null && setForm({
            ...editing.fields,
            'Cover Photo1': editing.fields['Cover Photo'][0].url,
            'Cover Photo2': editing.fields['Cover Photo'][1].url
        })
    }, [editing])
    useEffect(() => {
        if (id) {
            dispatch(fetch_editing(id))
        }
    }, [])
    return (
        <AddBooksContainer className="container">
            <h3>Thêm truyện mới</h3>
            <form onSubmit={onSubmit}>
                <div className="addBooks">
                    <div className="col col-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input onChange={onChange} name='Name' value={form['Name']} type="text" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input onChange={onChange} name='Author' value={form['Author']} placeholder='Array' type="text" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label>Bought?</label>
                            <input onChange={onChange} name='Bought?' value={form['Bought?']} type="checkbox" />
                        </div>
                        <div className="form-group">
                            <label>Read?</label>
                            <input onChange={onChange} name='Read?' value={form['Read?']} type="checkbox" />
                        </div>
                        <div className="form-group">
                            <label>Personal Rating</label>
                            <input onChange={onChange} name='Personal Rating' value={form['Personal Rating']} type="text" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label>Cover Photo</label>
                            <input onChange={onChange} name='Cover Photo1' value={form['Cover Photo1']} placeholder='Link Cover Photo1' type="text" className="form-control" aria-describedby="emailHelp" />
                            <input onChange={onChange} name='Cover Photo2' value={form['Cover Photo2']} placeholder='Link Cover Photo2' type="text" className="form-control" aria-describedby="emailHelp" />
                            <h5>Preview</h5>
                            <div className="preview">
                                <div className="col col-6">
                                    <img src={`${form['Cover Photo1']}`} alt="" />
                                </div>
                                <div className="col col-6">
                                    <img src={`${form['Cover Photo2']}`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="form-group content_addBooks">
                            <label>Synopsis</label>
                            <textarea onChange={onChange} name='Synopsis' value={form['Synopsis']} placeholder='Synopsis' id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group content_addBooks">
                            <label>Personal Notes</label>
                            <textarea onChange={onChange} name='Personal Notes' value={form['Personal Notes']} placeholder='Personal Notes' id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Sửa' : 'Thêm'}</button>
            </form>
        </AddBooksContainer>
    )
}