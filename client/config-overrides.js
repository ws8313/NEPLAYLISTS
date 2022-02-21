// module.exports = {
//   webpack: webpackConfig => {
//     // 스크립트 로더를 가져와서
//     const loader = webpackConfig.module.rules[2].oneOf[1];

//     loader.rules = [
//       // 기존 로더에다가
//       {
//         loader: loader.loader,
//         options: {
//           presets: [...loader.options.presets]
//         }
//       },
//       // linaria 로더 더하기
//       {
//         loader: 'linaria/loader',
//         options: {
//           cacheDirectory: 'src/.linaria_cache',
//           sourceMap: process.env.NODE_ENV !== 'production',
//           babelOptions: {
//             presets: loader.options.presets
//           }
//         }
//       }
//     ];

//     return webpackConfig;
//   }
// };