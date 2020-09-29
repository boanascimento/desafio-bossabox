// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'define': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'rules': {
        'strict': 'off',
        'semi': [
            'error', 'always'
        ],
        'comma-dangle': [
            'error', {
                'arrays': 'never',
                'objects': 'never',
                'functions': 'never'
            }
        ],
        'no-trailing-spaces': [
            'error', {
                'ignoreComments': false,
                'skipBlankLines': false
            }
        ],
        'no-multiple-empty-lines': [
            'error', {
                'max': 1,
                'maxEOF': 1
            }
        ],
        'quotes': [
            'error', 'single'
        ],
        'object-curly-spacing': [
            'error', 'always'
        ],
        'space-in-parens': ['error', 'never'],
        'no-console': ['error', { 'allow': ['warn', 'error'] }],
        'id-match': [
            'error', '^[^A-Z]+$', {
                'properties': false,
                'onlyDeclarations': true
            }
        ]
    }
};