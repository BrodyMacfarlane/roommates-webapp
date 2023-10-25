import axios from 'axios'

axios.defaults.withCredentials = true

export const apiAxios = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENV === 'prod'
      ? 'https://api.room8s.app/'
      : 'http://localhost:3333',
})

export const apiFetcher = (url: string) =>
  apiAxios.get(url).then((res) => res.data)
