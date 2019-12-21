declare namespace bch {
	interface Options {
		/**
		Only match an exact string. By default, it matches any BCH addresses in a string. Useful with `RegExp#test()` to check if a string is an BCH address.
		@default false
		*/
		readonly exact?: boolean;
    }
    /**
    Available BCH formats.
    */
    type Format = 'legacy' | 'cashaddr';
}

declare const bch: {
    /**
	Returns a regex for matching BCH addresses.
	@example
	```
	import bch = require('bitcoincash-regex')
	bch().test('nodejsrocks 19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k')
    //=> true
	```
	*/
    (options?: bch.Options): RegExp;

    /**
	Returns a regex for matching specific BCH format addresses.
	@example
	```
	import bch = require('bitcoincash-regex')
	bch.format('cashaddr', {exact: true}).test('bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a')
    //=> true
	```
	*/
    format(format: bch.Format, options?: bch.Options): RegExp;
}

export = bch;