import { updateDevice } from '@app/store/appSlice'
import { deviceDetection } from '@shared/lib/device'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from './routes'

function App() {
  const dispatch = useDispatch()

  const dispatchDevice = useCallback(() => {
    dispatch(updateDevice(deviceDetection()))
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('resize', dispatchDevice)
    dispatchDevice()
    return () => window.removeEventListener('resize', dispatchDevice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default App
