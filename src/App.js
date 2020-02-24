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
		</header>
        <CounterPage />
    </div>
  );
}

export default App;
