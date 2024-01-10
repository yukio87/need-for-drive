import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
// import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import path from 'path'

export default function buildPluguns({ mode, paths }) {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
      // favicon: path.resolve(paths.public, 'favicon.svg'),
    }),
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    )
    // plugins.push(
    //   new CopyPlugin({
    //     patterns: [
    //       {
    //         from: path.resolve(paths.public, 'locales'),
    //         to: path.resolve(paths.output, 'locales'),
    //       },
    //     ],
    //   }),
    // )
  }

  return plugins
}
