import React from 'react'
import routes from 'config/routes'
import { Provider } from 'react-redux'

import configureStore from 'configureStore'

const Root = () => (
	<Provider store={configureStore()}>
		{routes}
	</Provider>
)

export default Root