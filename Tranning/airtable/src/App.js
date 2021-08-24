import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { fetch_get_books } from './store/slice/booksSlice'
import DetailBooks from './components/DetailBooks'
import ListBooks from './components/ListBooks'
import NotFound from './components/NotFound';
import AddBooks from './components/AddBooks'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useEffect } from 'react'

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetch_get_books())
    }, [dispatch])

    return (
        <Router>
            <Navbar />

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/detailbooks/:id' component={DetailBooks} />
                <Route path='/addBooks/:id' component={AddBooks} />
                <Route path='/addBooks' component={AddBooks} />
                <Route path='/listbooks' component={ListBooks} />
                <Route path='/' component={NotFound} />
            </Switch>

        </Router>
    )
}