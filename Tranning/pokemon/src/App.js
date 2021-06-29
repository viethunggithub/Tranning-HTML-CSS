import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Details from './components/Details'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import LoginFixed from './components/LoginFixed'

export default function App() {
	return (
		<Router>
			<Header />
			<Navbar />

			<Switch>
				<Route path='/' exact={true} component={Content} />
				<Route path='/details/:id' exact={false} component={Details} />
			</Switch>
			
			<LoginFixed />
			<Footer />
		</Router>
	)
}
