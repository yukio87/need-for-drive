import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import buildWebpack from './config/build/buildWebpack.js'

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url)
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename)

export default (env) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  })

  return config
}
