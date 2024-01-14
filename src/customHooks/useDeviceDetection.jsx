import { useEffect, useState } from 'react'

function useDeviceDetection() {
  const [device, setDevice] = useState('')

  useEffect(
    function () {
      function handleDeviceDetection() {
        const { matchMedia } = window

        const isMobile = matchMedia('(max-width: 767px)').matches
        const isTablet = matchMedia('(max-width: 1023px)').matches
        const isDesktopMin = matchMedia('(max-width: 1439px)').matches
        const isDesktop = matchMedia('(min-width: 1440px)').matches

        if (isMobile) setDevice('mobile')
        else if (isTablet) setDevice('tablet')
        else if (isDesktopMin) setDevice('desctop-min')
        else if (isDesktop) setDevice('desktop')
      }
      handleDeviceDetection()

      window.addEventListener('resize', handleDeviceDetection)

      return function () {
        window.removeEventListener('resize', handleDeviceDetection)
      }
    },
    [device],
  )

  return device
}

export default useDeviceDetection
