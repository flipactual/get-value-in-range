# get-value-in-range

[![flipactual](https://img.shields.io/badge/😋-flipactual-218AC7.svg?style=flat-square)](https://www.flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/get-value-in-range.svg?style=flat-square)](https://travis-ci.org/flipactual/get-value-in-range/)
[![Codecov](https://img.shields.io/codecov/c/github/flipactual/get-value-in-range.svg?style=flat-square)](https://codecov.io/gh/flipactual/get-value-in-range/)
[![Node](https://img.shields.io/node/v/get-value-in-range.svg?style=flat-square)](http://npmjs.com/package/get-value-in-range)
[![NPM](https://img.shields.io/npm/v/get-value-in-range.svg?style=flat-square)](http://npmjs.com/package/get-value-in-range)

Calculate range adjusted values

<a name="getValueInRange"></a>

## getValueInRange(value, values) ⇒ <code>number</code>
Find the position of the value within a range where 0 is the minimum value
and 1 is the maximum value.

**Kind**: global function  
**Returns**: <code>number</code> - The position of the value within the range  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value to place within the range |
| values | <code>number</code> | All of the values necessary to calculate the range |

**Example**  
```js
getValueInRange(7.5, [10, 5]);
// → 0.5
```

## Scripts

### `test` – run the tests

```sh
npm run test
```

### `lint` – lint the codebase

```sh
npm run lint
```

### `write-readme` – generate the README

```sh
npm run write-readme
```

## License

MIT @ [Flip](https://github.com/flipactual)
