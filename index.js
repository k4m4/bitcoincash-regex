'use strict'

const bchRegExps = {
	legacy: '[13][a-km-zA-HJ-NP-Z1-9]{33}',
	cashaddr: '((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41}'
}

const buildRegExp = (body, opts) => {
	return opts.exact ? new RegExp('(?:^' + body + '$)') : new RegExp(body, 'g')
}

const bchRegex = opts => {
	opts = opts || {}
	const body = Object.keys(bchRegExps).map(format => '(?:' + bchRegExps[format] + ')').join('|')
	return buildRegExp(body, opts)
}

bchRegex.format = (format, opts) => {
	opts = opts || {}
	if (!bchRegExps[format]) {
		throw new Error('Invalid BCH format')
	}

	const body = bchRegExps[format]
	return buildRegExp(body, opts)
}

module.exports = bchRegex
