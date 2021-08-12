import { createStore } from 'redux'
import { flightsReducer } from '@/store/flightsReducer'

export const Store = createStore(flightsReducer)
