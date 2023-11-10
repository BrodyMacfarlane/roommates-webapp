import cookie from 'js-cookie'
import { useEffect, useState } from 'react'

export default function useCookie() {
  const [authCookie, setAuthCookie] = useState<string | null>(null)

  useEffect(() => {
    const adonisCookie = cookie.get('adonis-session')
    if (adonisCookie) setAuthCookie(adonisCookie)
    console.log(cookie.get())
  }, [])

  return authCookie
}
