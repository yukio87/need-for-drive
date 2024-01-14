import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import buildWebpack from './config/build/buildWebpack.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default (env) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    assets: path.resolve(__dirname, 'src/assets/'),
  }

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  })

  return config
}
