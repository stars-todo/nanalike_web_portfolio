const path = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@data-types': path.resolve(__dirname, 'src/data-types'),
        '@images': path.resolve(__dirname, 'src/images')
      }
    },
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/
      })
    ]
  });
};
