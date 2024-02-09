import { AppLayout } from '@pages/app-layout'
import { HomePage } from '@pages/home-page'
import { LocationPage } from '@pages/location-page'
import { Model } from '@pages/model-page'
import { Error } from '@shared/ui/errors'

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
      {
        path: '/model',
        element: <Model />,
      },
    ],
  },
]

export default routes
