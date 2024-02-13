import { AppLayout } from '@pages/app-layout'
import { HomePage } from '@pages/home-page'
import { LocationPage } from '@pages/location-page'
import { Model } from '@pages/model-page'
import { routesPaths } from '@shared/consts/routesPaths'
import { Error } from '@shared/ui/errors'

const { pathHomePage, pathLocationPage, pathModelPage } = routesPaths

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: pathHomePage,
        element: <HomePage />,
      },
      {
        path: pathLocationPage,
        element: <LocationPage />,
      },
      {
        path: pathModelPage,
        element: <Model />,
      },
    ],
  },
]

export default routes
