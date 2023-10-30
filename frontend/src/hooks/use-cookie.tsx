import cookie from 'js-cookie'

export default function useCookie() {
  const adonisCookie = cookie.get('adonis-session')
  console.log('adonis-session', adonisCookie)
  return
}
