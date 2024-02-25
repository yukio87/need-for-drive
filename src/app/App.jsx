import { updateDevice } from '@app/store/appSlice'
import { deviceDetection } from '@shared/lib/device'
import { getDataIsFilledForPages } from '@shared/lib/selectors/getDataIsFilledForPages'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { appRouter } from './appRouter'

function App() {
  const dispatch = useDispatch()
  const dataIsFilledForPages = useSelector(getDataIsFilledForPages)

  const dispatchDevice = useCallback(() => {
    dispatch(updateDevice(deviceDetection()))
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('resize', dispatchDevice)
    dispatchDevice()
    return () => window.removeEventListener('resize', dispatchDevice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <RouterProvider router={appRouter(dataIsFilledForPages)} />
}

export default App
