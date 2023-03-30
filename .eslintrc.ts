module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime', 'airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [
  //         ['@', './src'],
  //         ['components', './src/components'],
  //         ['views', './src/views'],
  //         ['utils', './src/utils'],
  //         ['constants', './src/constants'],
  //         ['api', './src/api'],
  //         ['assets', './src/assets'],
  //       ],
  //       extensions: ['.ts', '.js', '.jsx', '.json'],
  //     },
  //   },
  // },
  plugins: ['react', 'import', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
  },
};
