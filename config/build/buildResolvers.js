export default function buildResolvers(options) {
  return {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': options.paths.src,
      '@pages': options.paths.pages,
      '@features': options.paths.features,
      '@widgets': options.paths.widgets,
      '@shared': options.paths.shared,
      '@app': options.paths.app,
      '@entities': options.paths.entities,
    },
  }
}
