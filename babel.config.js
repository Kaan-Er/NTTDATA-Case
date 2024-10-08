module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanFaces', '__labelImage'],
      },
    ],
  ],
};
