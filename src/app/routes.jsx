import { AppLayout } from '@pages/app-layout'
import { CarPage } from '@pages/car-page'
import { HomePage } from '@pages/home-page'
import { LocationPage } from '@pages/location-page'
import { routesPaths } from '@shared/consts/routesPaths'
import { Error } from '@shared/ui/errors'

const { pathHomePage, pathLocationPage, pathCarPage } = routesPaths

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
        path: pathCarPage,
        element: <CarPage />,
      },
    ],
  },
]

export default routes
