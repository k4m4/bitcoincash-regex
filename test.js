import test from 'ava';
import m from './';

const fixtures = [
		'19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k',
		'1F4MH7XeQypXZTjFgCj8ZSd63NX8ywTEbG',
		'1JCe8z4jJVNXSjohjM4i9Hh813dLCNx2Sy',
		'3B8vnfVt8UhHtYW7ib5BA7ZiVKDXY9UkRS',
		'1EeBbBiJGvVzemoLodsrZxv9sEKq1dz1KT'
];

const fixturesNot = [
		'0x6f46cf5569aefa1acc1009290c8e043747172d89',
		'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
		'XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh',
		'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
		'nikolaskam{at}gmail{dot}com'
];

test('Exact BCH addresses', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact BCH addresses', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}
	t.is(m().exec('bitcoincash:19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k')[0], '19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k');
});

test('Non-BCH addresses', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});