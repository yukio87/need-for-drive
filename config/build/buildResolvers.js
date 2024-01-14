export default function buildResolvers(options) {
  return {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': options.paths.src,
      '@assets': options.paths.assets,
    },
  }
}
