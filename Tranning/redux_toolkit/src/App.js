import './App.css'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { menus } from './components/Navbar/menus'
import { pages } from './components/Pages/pages'
import FormProductPage from './components/Pages/FormProductPage'

const CustomLink = ({ label, to, exact }) => {
    return (
        <Route path={to} exact={exact} children={({ match }) => {
            var active = match ? "active" : ""
            return (
                <li className={active}>
                    <NavLink to={to}>{label}</NavLink>
                </li>
            )
        }} />
    )
}
export default function App() {
    return (
        <Router>
            <div className="navbar">
                <p className="navbar-brand">Reduxjs/Toolkit</p>
                <ul className="nav navbar-nav">
                    {
                        menus.map((menu, index) => {
                            return (
                                <CustomLink label={menu.label} to={menu.to} exact={menu.exact} key={index} />
                            )
                        })
                    }
                </ul>
            </div>
            <Switch>
                <Route path={`/formProduct/:id`} exact={true} component={FormProductPage} />
                {
                    pages.map((page, index) => {
                        return (
                            <Route path={page.path} exact={page.exact} component={page.main} key={index} />
                        )
                    })
                }

            </Switch>
        </Router>
    )
}
