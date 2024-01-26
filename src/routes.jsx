import AppLayout from './pages/AppLayout/components/AppLayout/AppLayout'
import HomePage from './pages/HomePage/components/HomePage/HomePage'
import LocationPage from './pages/LocationPage/components/LocationPage/LocationPage'
import Error from './ui/Error'

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/location',
        element: <LocationPage />,
      },
    ],
  },
]

export default routes
