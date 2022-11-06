'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calc0Double(number, basis = 1) {
    console.log(number * basis);
}

calc0Double(3);