import { applyMiddleware, createStore, compose } from 'redux'
import { flightsReducer } from '@/store/flightsReducer'
import createSagaMiddleware from 'redux-saga'
import { flightsWatcher } from '@/store/saga/flightsSaga'

const sagaMiddleware = createSagaMiddleware()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const Store = createStore(
  flightsReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(flightsWatcher)
