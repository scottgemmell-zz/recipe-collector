import React from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.svg';

export default function SiteHeader() {
	return (
		<header className="App-header">
			<div className="App-inner">
				<div className="App-logo">
					<img src={logo} alt="logo" />
					<h1>
						Recipes Collector
					</h1>
				</div>
				<nav className="App-nav">
					<ul>
						<li><Link to="/list/">List</Link></li>
						<li><Link to="/collection/">Collection</Link></li>
						<li><Link to="/example/">Example</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
