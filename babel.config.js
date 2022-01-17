module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@assets': './assets/',
          '@shared': './shared',
          '@redux': './src/redux/',
          '@api': './src/api/',
          '@features': './src/features/',
          '@components': './src/components/',
          '@navigation': './src/navigation/',
          '@models': './src/models/'
        }
      }
    ]
  ]
};
