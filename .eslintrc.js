module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['components', './src/components'],
          ['views', './src/views'],
          ['utils', './src/utils'],
          ['constants', './src/constants'],
          ['api', './src/api'],
          ['assets', './src/assets'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['react', 'import'],
  rules: {
    'react/prop-types': 'off',
  },
};
