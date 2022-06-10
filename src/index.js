import 'wdyr'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import './index.css'
import store from 'configureStore'
import { Provider } from 'react-redux'
import './i18n'
import Routes from 'Routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App>
        <Routes />
      </App>
    </Provider>
  // </React.StrictMode>
)