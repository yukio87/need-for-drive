import HomePage from '../pages/HomePage/components/HomePage/HomePage'
import LocationPage from '../pages/LocationPage/components/LocationPage/LocationPage'

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/location',
    element: <LocationPage />,
  },
]

export default routes
