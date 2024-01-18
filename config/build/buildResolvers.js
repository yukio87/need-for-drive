export default function buildResolvers(options) {
  return {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': options.paths.src,
      '@assets': options.paths.assets,
      '@customHooks': options.paths.customHooks,
      '@modules': options.paths.modules,
      '@ui': options.paths.ui,
      '@components': options.paths.components,
      '@pages': options.paths.pages,
      '@services': options.paths.services,
      '@utils': options.paths.utils,
    },
  }
}
