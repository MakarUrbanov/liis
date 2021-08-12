import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/index.scss'
import App from '@/App'
import { Provider } from 'react-redux'
import { Store } from '@/store/store'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
