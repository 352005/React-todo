module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.html'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};