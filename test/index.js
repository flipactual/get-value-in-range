const assert = require('assert');
const getValueInRange = require('../index')([
  10,
  5,
]);

describe('getValueInRange', () => {
  it('Returns 0 for the minimum value in the range', () => {
    assert.equal(getValueInRange(5), 0);
  });
  it('Returns 0.5 for the middle value in the range', () => {
    assert.equal(getValueInRange(7.5), 0.5);
  });
  it('Returns 1 for the maximum value in the range', () => {
    assert.equal(getValueInRange(10), 1);
  });
});
