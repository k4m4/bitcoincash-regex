'use strict';
const re = '[13][a-km-zA-HJ-NP-Z1-9]{33}';

module.exports = opts => {
	opts = opts || {};
	return opts.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};