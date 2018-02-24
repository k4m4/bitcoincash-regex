# bitcoincash-regex [![Build Status](https://travis-ci.org/k4m4/bitcoincash-regex.svg?branch=master)](https://travis-ci.org/k4m4/bitcoincash-regex)

> Regular expression for matching Bitcoin Cash (BCH) addresses.


## Install

```
~ ❯❯❯ npm install bitcoincash-regex
```


## Usage

```js
const bitcoincashRegex = require('bitcoincash-regex');

bitcoincashRegex().test('nodejsrocks 19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k');
//=> true

bitcoincashRegex({exact: true}).test('nodejsrocks 19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k foo');
//=> false

bitcoincashRegex({exact: true}).test('19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k');
//=> true

'nodejsrocks 19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k unicorn 1F4MH7XeQypXZTjFgCj8ZSd63NX8ywTEbG rainbow'.match(bitcoincashRegex());
//=> ['19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k', '1F4MH7XeQypXZTjFgCj8ZSd63NX8ywTEbG']
```


## API

### bitcoincashRegex([options])

Returns a regex for matching BCH addresses.

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