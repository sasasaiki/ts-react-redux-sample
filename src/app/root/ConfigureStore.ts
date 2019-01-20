import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore, DeepPartial } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { rootReducer } from './RootModule'
export const history = createBrowserHistory()

export default function configureStore(preloadedState?: any) {
	const store = createStore(
		rootReducer(history), // root reducer with router state
		preloadedState,
		compose(
			applyMiddleware(
				routerMiddleware(history), // for dispatching history actions
				// ... other middlewares ...
			),
		),
	)

	return store
}