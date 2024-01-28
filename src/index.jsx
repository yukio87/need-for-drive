import '@app/styles/sass/main.scss'
import '@app/fonts/fonts.scss'

import App from '@app/App'
import store from '@app/store/store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
