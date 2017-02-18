import React from 'react'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import { BASE_URL } from 'config/constants'

import { Main, Home } from 'components'


const routes = (
	<Router history={browserHistory}>
		<Route path={BASE_URL} component={Main}>
			<IndexRoute component={Home} />			
		</Route>
	</Router>
)

export default routes