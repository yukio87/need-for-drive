import { baseURL } from '@shared/consts/urls'
import axios from 'axios'

export async function api(url, options) {
  try {
    const res = await axios({
      baseURL,
      url,
      params: options.params,
      method: options.method,
      data: options.data,
    })

    return res
  } catch (err) {
    throw new Error('Не удалось получить данные...')
  }
}
