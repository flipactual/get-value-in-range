/**
 * Find the position of the value within a range where 0 is the minimum value
 * and 1 is the maximum value.
 *
 * @example
 * getValueInRange(7.5, [10, 5]);
 * // → 0.5
 *
 * @param  {number} value  The value to place within the range
 * @param  {number} values All of the values necessary to calculate the range
 * @return {number}        The position of the value within the range
 */
function getValueInRange(value, values) {
  const range = Math.max(...values) - Math.min(...values);
  return (value / range) - 1;
}

module.exports = getValueInRange;
