module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	env: {
		node: true,
		es6: true
	},
	rules: {
		'comma-dangle': [ 'error', 'never' ],
		'no-inner-declarations': [ 'error', 'both' ],
		'valid-jsdoc': [ 'error', {
			'requireReturn': false
		}],
		'strict': [ 'error', 'global' ],
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'curly': 'error',
		'dot-location': [ 'error', 'property' ],
		'dot-notation': 'error',
		'eqeqeq': 'error',
		'guard-for-in': 'error',
		'no-cond-assign': [ 'error', 'always' ],
		'no-alert': 'error',
		'no-caller': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': [ 'error', { 'ignore': [ 0, 1, 2, 4, 8, 10, 20, 24, 30, 60, 100, 1000, 1024 ] }],
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-native-reassign': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-proto': 'error',
		'no-return-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-useless-concat': 'error',
		'no-void': 'error',
		'no-warning-comments': [ 'error', { 'terms': [ 'todo', 'fixme' ], 'location': 'start' }],
		'no-with': 'error',
		'radix': 'error',
		'wrap-iife': [ 'error', 'inside' ],
		'yoda': 'error',
		'no-catch-shadow': 'error',
		'no-label-var': 'error',
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-use-before-define': 'error',
		'no-new-require': 'error',
		'array-bracket-spacing': [ 'error', 'always', {
			'objectsInArrays': false,
			'arraysInArrays': false
		}],
		'block-spacing': 'error',
		'brace-style': [ 'error', '1tbs' ],
		'camelcase': 'off',
		'comma-spacing': [ 'error', { 'before': false, 'after': true }],
		'comma-style': [ 'error', 'last' ],
		'computed-property-spacing': [ 'error', 'never' ],
		'eol-last': 'error',
		'id-blacklist': [ 'error', 'data', 'err', 'e', 'cb', 'callback', 'result', 'returned', 'resultJson' ],
		'id-length': [ 'error', {
			'exceptions': [ 'i', 'j', '$' ]
		}],
		'indent': [ 'error', 'tab', {
			'SwitchCase': 1,
			'VariableDeclarator': 1
		}],
		'jsx-quotes': [ 'error', 'prefer-double' ],
		'key-spacing': [ 'error', {
			'beforeColon': false,
			'afterColon': true,
			'mode': 'strict'
		}],
		'keyword-spacing': [ 'error', {
			'before': true,
			'after': true,
			'overrides': {
				'if': { 'after': false },
				'for': { 'after': false },
				'while': { 'after': false }
			}
		}],
		'linebreak-style': [ 'error', 'unix' ],
		'max-depth': [ 'error', 4 ],
		'max-nested-callbacks': [ 'error', 3 ],
		'max-params': [ 'error', 5 ],
		'newline-after-var': [ 'error', 'always' ],
		'no-array-constructor': 'error',
		'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-spaced-func': 'error',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': [ 'error', 'always', {
			'objectsInObjects': false,
			'arraysInObjects': true
		}],
		'one-var': [ 'error', {
			'var': 'always',
			'let': 'never',
			'const': 'never'
		}],
		'one-var-declaration-per-line': [ 'error', 'initializations' ],
		'operator-linebreak': [ 'error', 'none' ],
		'padded-blocks': [ 'error', 'never' ],
		'quotes': [ 'error', 'single', { 'avoidEscape': true }],
		'semi': [ 'error', 'always' ],
		'semi-spacing': [ 'error', { 'before': false, 'after': true }],
		'space-before-blocks': 'error',
		'space-before-function-paren': [ 'error', {
			'asyncArrow': 'always',
			'anonymous': 'never',
			'named': 'never'
		}],
		'spaced-comment': [ 'error', 'always' ],
		'wrap-regex': 'error',
		'arrow-spacing': [ 'error', { 'before': true, 'after': true }],
		'no-const-assign': 'error',
		'no-confusing-arrow': 'error',
		'object-shorthand': [ 'error', 'always' ],
		'prefer-template': 'error',
		'template-curly-spacing': [ 'error', 'never' ]
	}
};
