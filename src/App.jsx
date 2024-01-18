import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from './routes'
import { updateDevice } from './store/appSlice.js'
import { deviceDetection } from './utils/helpers.js'

function App() {
  const dispatch = useDispatch()

  const dispatchDevice = useCallback(() => {
    dispatch(updateDevice(deviceDetection()))
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('resize', dispatchDevice)
    return () => window.removeEventListener('resize', dispatchDevice)
  }, [dispatchDevice])

  useEffect(
    () => window.addEventListener('load', dispatchDevice),
    [dispatchDevice],
    {
      once: true,
    },
  )

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default App
