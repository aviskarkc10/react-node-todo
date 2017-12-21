import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import StandupAssistant from './components/';

const Router = () => {
	return(
		<BrowserRouter>
			<div>
				<Switch>
			    <Route path="/login" component={Login} />
			    <Route path="/" component={StandupAssistant} />
			  </Switch> 
			</div>
		</BrowserRouter>
	);
}

export default Router;