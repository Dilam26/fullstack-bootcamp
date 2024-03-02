module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node':true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'module',
      } 
    }
  ],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 'latest'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', 
    'indent': [
      'error',
      2
    ],
    'linebreak-style': 'off',
    'quotes': [
      'error', 
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
