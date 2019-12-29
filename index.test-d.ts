import {expectType} from 'tsd';
import bchRegex = require('.');

expectType<RegExp>(bchRegex());
expectType<RegExp>(bchRegex({exact: true}));
expectType<RegExp>(bchRegex.format('legacy'));
expectType<RegExp>(bchRegex.format('cashaddr', {exact: false}));