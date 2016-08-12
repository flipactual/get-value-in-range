[![flipactual](https://img.shields.io/badge/😋-flipactual-43A6F6.svg?style=flat-square)](https://flipactual.com/)
[![Travis](https://img.shields.io/travis/flipactual/get-value-in-range.svg?style=flat-square)](https://travis-ci.org/flipactual/get-value-in-range/)
[![Node](https://img.shields.io/node/v/get-value-in-range.svg?style=flat-square)](http://npmjs.com/package/get-value-in-range)
[![NPM](https://img.shields.io/npm/v/get-value-in-range.svg?style=flat-square)](http://npmjs.com/package/get-value-in-range)

## Functions

<dl>
<dt><a href="#getValueInRange">getValueInRange(values)</a> ⇒ <code><a href="#instantiatedGetValueInRange">instantiatedGetValueInRange</a></code></dt>
<dd><p>Create a function with specified range for finding values within.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#instantiatedGetValueInRange">instantiatedGetValueInRange</a> ⇒ <code>Number</code></dt>
<dd></dd>
</dl>

<a name="getValueInRange"></a>

## getValueInRange(values) ⇒ <code>[instantiatedGetValueInRange](#instantiatedGetValueInRange)</code>
Create a function with specified range for finding values within.

**Kind**: global function  
**Returns**: <code>[instantiatedGetValueInRange](#instantiatedGetValueInRange)</code> - Instatiated function with range set.  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Number</code> | The value to place within the range. |

**Example**  
```js
const getValueInRange = require('get-value-in-range')([10, 5]);
// → instantiatedGetValueInRange
```
<a name="instantiatedGetValueInRange"></a>

## instantiatedGetValueInRange ⇒ <code>Number</code>
**Kind**: global typedef  
**Returns**: <code>Number</code> - The position of the value within the range.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | The value to place within the range. |

**Example**  
```js
getValueInRange(7.5);
// → 0.5
```

## License

MIT @ [Flip](https://github.com/flipactual)
