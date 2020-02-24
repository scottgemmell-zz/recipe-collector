import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CounterPage from './pages/CounterPage';

function App() {
  return (
    <div className="App">
		<header className="App-header">
			<div>
				<img src={logo} className="App-logo" alt="logo" />
				<h1>
					Recipes Collector
				</h1>
			</div>
			<nav className="App-nav">
				<ul>
					<li><a href="">List</a></li>
					<li><a href="">Collection</a></li>
					<li><a href="">Counter</a></li>
				</ul>
			</nav>
		</header>
        <CounterPage />
    </div>
  );
}

export default App;
