import {expectType} from 'tsd';
import bch = require('.');

expectType<RegExp>(bch());
expectType<RegExp>(bch({exact: true}));
expectType<RegExp>(bch.format('legacy'));
expectType<RegExp>(bch.format('cashaddr', {exact: false}));