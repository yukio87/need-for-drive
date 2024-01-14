import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from './pages/AppLayout/components/AppLayout/AppLayout'
import routes from './routes/routes'
import Error from './ui/Error'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,

      children: routes,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
