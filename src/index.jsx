import '@app/styles/sass/main.scss'
import '@app/fonts/fonts.scss'

import App from '@app/App'
import store from '@app/store/store'
import { ToastsProvider } from '@features/show-message'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      throwOnError: true,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastsProvider />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
