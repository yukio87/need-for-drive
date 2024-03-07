import axios from 'axios'

const baseURL = 'https://frontend-study.simbirsoft.dev/api'

export const urlCity = '/db/city'
export const urlAddress = '/db/point'

export async function api(url, options) {
  try {
    const res = await axios({
      baseURL,
      url,
      params: options.params,
      method: options.method,
    })

    return res
  } catch (err) {
    throw new Error('Не удалось получить данные...')
  }
}
