module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    "semi": [2, "always"],
    "indent": [2, 4],
        "no-return-await": 0,
        "space-before-function-paren": [2, {
            "named": "never",
            "anonymous": "never",
            "asyncArrow": "always"
        }],
        "template-curly-spacing": [2, "always"]
  }
}
