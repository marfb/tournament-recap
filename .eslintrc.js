module.exports = {
	env: {
		es6: true,
		jest: true,
		browser: true,
	},
	extends: ['airbnb', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'off',
			{
				extensions: ['.jsx', '.js'],
			},
		],
		'import/prefer-default-export': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
		'react/function-component-definition': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
			},
		},
	},
};
