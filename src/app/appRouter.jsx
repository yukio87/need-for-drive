import { AppLayout } from '@pages/app-layout'
import { CarPage } from '@pages/car-page'
import { ConfirmedPage } from '@pages/confirmed-page'
import { ExtraPage } from '@pages/extra-page'
import { HomePage } from '@pages/home-page'
import { LocationPage } from '@pages/location-page'
import { ResultPage } from '@pages/result-page'
import { routesPaths } from '@shared/consts/routesPaths'
import { Error } from '@shared/ui/errors'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const {
  pathHomePage,
  pathLocationPage,
  pathCarPage,
  pathExtraPage,
  pathResultPage,
  pathConfirmedPage,
} = routesPaths

function ProtectedRoute({ isAllowed, children }) {
  if (!isAllowed) return <Navigate to={pathHomePage} />

  return children
}

export function appRouter(dataIsFilledForPages) {
  const { locationDataIsFilled, carDataIsFilled, extraDataIsFilled } =
    dataIsFilledForPages

  const orderIsPlaced = false // temp

  return createBrowserRouter([
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
          element: (
            <ProtectedRoute isAllowed={locationDataIsFilled}>
              <CarPage />
            </ProtectedRoute>
          ),
        },
        {
          path: pathExtraPage,
          element: (
            <ProtectedRoute isAllowed={carDataIsFilled}>
              <ExtraPage />
            </ProtectedRoute>
          ),
        },
        {
          path: pathResultPage,
          element: (
            <ProtectedRoute isAllowed={extraDataIsFilled}>
              <ResultPage />
            </ProtectedRoute>
          ),
        },
        {
          path: pathConfirmedPage,
          element: (
            <ProtectedRoute isAllowed={orderIsPlaced}>
              <ConfirmedPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ])
}
