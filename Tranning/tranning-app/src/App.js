
import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './Pages/HomePage'
import NotFoundPage from './Pages/NotFoundPage'
import Dropdown from './components/Dropdown/Dropdown'
import Input from './components/Input/Input'
import Layouts from './components/Layouts/Layouts'
import Links from './components/Link/Link'
import NotificationDot from './components/NotificationDot/NotificationDot'
import Progress from './components/Progress/Progress'
import Radio from './components/Radio/Radio'
import Skeleton from './components/Skeleton/Skeleton'
import Slider from './components/Slider/Slider'
import Spinner from './components/Spinner/Spinner'
import SVG_Icons from './components/SVG_Icons/SVG_Icons'
import Table from './components/Table/Table'
import Toogle from './components/Toggle/Toggle'
import Checkbox from './components/Checkbox/Checkbox'
import Card from './components/Card/Card'
import Menu from './components/Btn_Menu/Menu'
import Alert from './components/Alert/Alert'
import Primitives from './components/Primitives/Primitives'
import Button from './components/Buttons/Button'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Text from './components/Text/Text'
import Tag from './components/Tag/Tag'
import FallingBunnies from './components/FallingBunnies/FallingBunnies'
import Images from './components/Image/Image'
import Heading from './components/Heading/Heading'


const Div = styled.div`
	position:fixed;
	top:0px;
	right:0px;
	left:0px;
	z-index:1000;
`;
const Divs = styled.div`
	margin:0px;
	bottom:0px;
	right:0px;
	left:0px;
	position:fixed;
	z-index:1000;
`;

const MenuLink = ({ label, to, exact }) => {
	return (<Route path={to} exact={exact} children={({ match }) => {
		var active = match ? "active" : "";
		return (
			<li className={active}>
				<NavLink to={to}>
					{label}
				</NavLink>
			</li>
		)
	}} />)
}


function App() {
	return (
		<Router>
			<div>
				<Div className="navbar navbar-default">
					<span className="navbar-brand">Tranning</span>
					<ul className="nav navbar-nav">
						<MenuLink label="Alert" to="/Alert" exact={true} />
						<MenuLink label="Primitives" to="/Primitives" />
						<MenuLink label="Breadcrumbs" to="/Breadcrumbs" />
						<MenuLink label="Button" to="/Button" />
						<MenuLink label="ButtonMenu" to="/ButtonMenu" />
						<MenuLink label="Card" to="/Card" />
						<MenuLink label="Checkbox" to="/Checkbox" />
						<MenuLink label="Dropdown" to="/Dropdown" />
						<MenuLink label="FallingBunnies" to="/FallingBunnies" />
						<MenuLink label="Heading" to="/Heading" />
						<MenuLink label="Image" to="/Image" />
						<MenuLink label="Input" to="/Input" />
					</ul>
				</Div>

				<Divs className="navbar navbar-default">
					<span className="navbar-brand" >Tranning</span>
					<ul className="nav navbar-nav">
						<MenuLink label="Layouts" to="/Layouts"  exact={true}/>
						<MenuLink label="Links" to="/Links" />
						<MenuLink label="NotificationDot" to="/NotificationDot"/>
						<MenuLink label="Progress" to="/Progress" />
						<MenuLink label="Radio" to="/Radio"  />
						<MenuLink label="Skeleton" to="/Skeleton" />
						<MenuLink label="Slider" to="/Slider" />
						<MenuLink label="Spinner" to="/Spinner" />
						<MenuLink label="SVG_Icons" to="/SVG_Icons" />
						<MenuLink label="Table" to="/Table" />
						<MenuLink label="Tag" to="/Tag" />
						<MenuLink label="Text" to="/Text" />
						<MenuLink label="Toogle" to="/Toogle" />
					</ul>
				</Divs>


				<Switch>
					<Route path="/" component={HomePage} exact={true} />
					<Route path="/Alert" component={Alert} />
					<Route path="/Primitives" component={Primitives} />
					<Route path="/Breadcrumbs" component={Breadcrumbs} />
					<Route path="/Button" component={Button} />
					<Route path="/ButtonMenu" component={Menu} />
					<Route path="/Card" component={Card} />
					<Route path="/Checkbox" component={Checkbox} />
					<Route path="/Dropdown" component={Dropdown} />
					<Route path="/FallingBunnies" component={FallingBunnies} />
					<Route path="/Heading" component={Heading} />
					<Route path="/Image" component={Images} />
					<Route path="/Input" component={Input} />
					<Route path="/Layouts" component={Layouts} />
					<Route path="/Links" component={Links} />
					<Route path="/NotificationDot" component={NotificationDot} />
					<Route path="/Progress" component={Progress} />
					<Route path="/Radio" component={Radio} />
					<Route path="/Skeleton" component={Skeleton} />
					<Route path="/Slider" component={Slider} />
					<Route path="/Spinner" component={Spinner} />
					<Route path="/SVG_Icons" component={SVG_Icons} />
					<Route path="/Table" component={Table} />
					<Route path="/Tag" component={Tag} />
					<Route path="/Text" component={Text} />
					<Route path="/Toogle" component={Toogle} />
					<Route path="/" component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	)
}
export default App