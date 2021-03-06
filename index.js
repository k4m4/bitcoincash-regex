'use strict'

const bchRegExps = {
	legacy: '[13][a-km-zA-HJ-NP-Z1-9]{33}',
	cashaddr: '((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41}'
}

const buildRegExp = (body, options) => {
	return options.exact ? new RegExp('(?:^' + body + '$)') : new RegExp(body, 'g')
}

const bchRegex = options => {
	options = options || {}
	const body = Object.keys(bchRegExps).map(format => '(?:' + bchRegExps[format] + ')').join('|')
	return buildRegExp(body, options)
}

bchRegex.format = (format, options) => {
	options = options || {}
	if (!bchRegExps[format]) {
		throw new Error('Invalid BCH format')
	}

	const body = bchRegExps[format]
	return buildRegExp(body, options)
}

module.exports = bchRegex
