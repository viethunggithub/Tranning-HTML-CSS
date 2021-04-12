import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import NotFound from './pages/NotFound'
import Colors from './components/Color/Colors'
import Gird from './components/Gird/Gird'
import Typography from './components/Typography/Typography'
import Alerts from './components/Alerts/Alerts'
import Badge from './components/Badge/Badge'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import Buttons from './components/Buttons/Buttons'
import Carousel from  './components/Carousel/Carousel'
import Dropdowns from  './components/Dropdowns/Dropdowns'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="navbar navbar-default">
                    <a className="navbar-brand" >Tranning</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/result">Result</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/result" component={Result} />
                    <Route path="/Colors" component={Colors} />
                    <Route path="/Gird" component={Gird} />
                    <Route path="/Typography" component={Typography} />
                    <Route path="/Alerts" component={Alerts} />
                    <Route path="/Badge" component={Badge} />
                    <Route path="/Breadcrumb" component={Breadcrumb} />
                    <Route path="/Buttons" component={Buttons} />
                    <Route path="/Carousel" component={Carousel} />
                    <Route path="/Dropdowns" component={Dropdowns} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </Router>
        )
    }
}
export default App;