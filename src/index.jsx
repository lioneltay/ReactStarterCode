import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'config/routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from 'redux/modules'

import 'styles/styles.scss'

const store = createStore(combineReducers(reducers), compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.querySelector('#app')
)
