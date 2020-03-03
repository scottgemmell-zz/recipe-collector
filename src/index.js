import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ListPage from './pages/ListPage';
import SiteHeader from './common/SiteHeader';
import ExamplePage from './pages/ExamplePage';
import Collection from './features/collection/Collection';
import ItemPage from './pages/ItemPage';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div className="App">
				<SiteHeader />
				<Switch>
					{/* <Route path="/list/">
						<ListPage />
					</Route> */}
					<Route path="/collection/">
						<Collection />
					</Route>
					<Route path="/example/">
						<ExamplePage />
					</Route>
					<Route path={"/item/:id"}>
						<ItemPage />
					</Route>
					<Route path={["/", "/list/"]}>
						<ListPage />
					</Route>
				</Switch>
			</div>
		</Router>
	</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
