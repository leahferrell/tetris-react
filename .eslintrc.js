module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	parserOptions: {
		tsconfigRootDr: __dirname,
		project: ['./tsconfig.json']
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	rules: {
		indent: ['error', 2],
		'no-tabs': ['error'],
		semi: ['error', 'never'],
		quotes: ['error', 'single']
	}
};
