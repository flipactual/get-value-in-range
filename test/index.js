const test = require('ava');
const getValueInRange = require('../src');

test('Returns 0 for the minimum value in the range', t => {
  t.is(getValueInRange(5, [10, 5]), 0);
});

test('Returns 0.5 for the middle value in the range', t => {
  t.is(getValueInRange(7.5, [10, 5]), 0.5);
});

test('Returns 1 for the maximum value in the range', t => {
  t.is(getValueInRange(10, [10, 5]), 1);
});
