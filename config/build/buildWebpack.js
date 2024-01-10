import buildDevServer from './buildDevServer.js'
import buildLoaders from './buildLoaders.js'
import buildPluguns from './buildPlugins.js'
import buildResolvers from './buildResolvers.js'

export default function buildWebpack(options) {
  const { mode, paths } = options
  const isDev = mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPluguns(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
