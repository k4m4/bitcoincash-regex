# bitcoincash-regex [![Build Status](https://travis-ci.org/k4m4/bitcoincash-regex.svg?branch=master)](https://travis-ci.org/k4m4/bitcoincash-regex)

> Regular expression for matching Bitcoin Cash (BCH) Legacy and CashAddr addresses.


## Install

```
~ ❯❯❯ npm install bitcoincash-regex
```


## Usage

```js
const bch = require('bitcoincash-regex')

bch().test('nodejsrocks 19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k')
//=> true

bch({exact: true}).test('nodejsrocks 19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k foo')
//=> false

bch({exact: true}).test('19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k')
//=> true

bch.format('cashaddr', {exact: true}).test('bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a')
//=> true

bch.format('cashaddr', {exact: true}).test('19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k')
//=> false

'nodejsrocks 19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k unicorn bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a rainbow'.match(bitcoincashRegex());
//=> ['19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k', 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a']
```


## API

### bch([options])

Returns a regex for matching BCH addresses.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any BCH address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an BCH address.


### bch.format([format], [options])

Returns a regex for matching specific BCH format addresses.

#### format

Type: `string`<br>
Supported Formats: `legacy`, `cashaddr`

Match a specific BCH address format.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any BCH address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an BCH address.


## Related

- [ethereum-regex](https://github.com/k4m4/ethereum-regex) - Regular expression for matching Ethereum (ETH) addresses.
- [litecoin-regex](https://github.com/k4m4/litecoin-regex) - Regular expression for matching Litecoin (LTC) addresses.
- [monero-regex](https://github.com/k4m4/monero-regex) - Regular expression for matching Monero (XMR) addresses.
- [dash-regex](https://github.com/k4m4/dash-regex) - Regular expression for matching Dash addresses.
- [ripple-regex](https://github.com/k4m4/ripple-regex) - Regular expression for matching Ripple (XRP) addresses.
- [neo-regex](https://github.com/k4m4/neo-regex) - Regular expression for matching NEO addresses.
- [dogecoin-regex](https://github.com/k4m4/dogecoin-regex) - Regular expression for matching Dogecoin (DOGE) addresses.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)