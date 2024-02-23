import { AppLayout } from '@pages/app-layout'
import { CarPage } from '@pages/car-page'
import { ConfirmedPage } from '@pages/confirmed-page'
import { ExtraPage } from '@pages/extra-page'
import { HomePage } from '@pages/home-page'
import { LocationPage } from '@pages/location-page'
import { ResultPage } from '@pages/result-page'
import { routesPaths } from '@shared/consts/routesPaths'
import { Error } from '@shared/ui/errors'

const {
  pathHomePage,
  pathLocationPage,
  pathCarPage,
  pathExtraPage,
  pathResultPage,
  pathConfirmedPage,
} = routesPaths

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
      {
        path: pathExtraPage,
        element: <ExtraPage />,
      },
      {
        path: pathResultPage,
        element: <ResultPage />,
      },
      {
        path: pathConfirmedPage,
        element: <ConfirmedPage />,
      },
    ],
  },
]

export default routes
