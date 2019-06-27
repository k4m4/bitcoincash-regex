import test from 'ava'
import m from './'

const fixtures = {
	'legacy': [
		'1BpEi6DfDAUFd7GtittLSdBeYJvcoaVggu',
		'1KXrWXciRDZUpQwQmuM1DbwsKDLYAYsVLR',
		'3CWFddi6m4ndiGyKqzYvsFYagqDLPVMTzC',
		'3LDsS579y7sruadqu11beEJoTjdFiFCdX4',
		'31nwvkZwyPdgzjBJZXfDmSWsC4ZLKpYyUw'
	],
	'cashaddr': [
		'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
		'bitcoincash:qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy',
		'bitcoincash:ppm2qsznhks23z7629mms6s4cwef74vcwvn0h829pq',
		'bitcoincash:pr95sy3j9xwd2ap32xkykttr4cvcu7as4yc93ky28e',
		'bitcoincash:pqq3728yw0y47sqn6l2na30mcw6zm78dzq5ucqzc37'
	]
}

const fixturesNot = [
	'0x6f46cf5569aefa1acc1009290c8e043747172d89',
	'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
	'XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh',
	'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
	'nikolaskam{at}gmail{dot}com'
]

test('bch', t => {
	Object.keys(fixtures).map(format => {
		fixtures[format].map(x => t.true(m({exact: true}).test(x)))
	})
})

test('bch format', t => {
	Object.keys(fixtures).map(format => {
		fixtures[format].map(x => t.true(m.format(format, {exact: true}).test(x)))
		fixtures[format].map(x => t.is((m.format(format).exec(`foo ${x} bar`))[0], x))
	})
})

test('non-bch', t => {
	fixturesNot.map(x => t.false(m({exact: true}).test(x)))
})