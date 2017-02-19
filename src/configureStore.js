import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from 'redux/modules'

const configureStore = () => {
	const store = createStore(combineReducers(reducers), compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : (f) => f
	))
	
	return store
}

export default configureStore