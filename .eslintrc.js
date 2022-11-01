module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    'max-len': ['warn', { code: 80 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',
    'import/export': 'off',
    'react/prop-types': 'off',
  },
};
