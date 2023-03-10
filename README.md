d# thousandify

Currency thousand format

[![NPM Version](https://img.shields.io/npm/v/thousandify.svg)](https://www.npmjs.com/package/thousandify)
[![NPM Downloads](https://img.shields.io/npm/dm/thousandify.svg)](https://www.npmjs.com/package/thousandify)

# Installation
```js
$ npm install thousandify
```

# Usage
```js
const thousandify = require('thousandify');

// 123456 -> '123,456'
console.log(thousandify(123456))

// 123456.1 -> '123,456.1'
console.log(thousandify(123456.1))

// 123456.123 -> '123,456.123'
console.log(thousandify(123456.123))

// 123456 -> '123,456.00'
console.log(thousandify(123456, { decimalDigits: 2 }))

// 123456.1-> '123,456.10'
console.log(thousandify(123456.1, { decimalDigits: 2 }))

// 123,456.123 -> '123,456.12'
console.log(thousandify(123456.123, { decimalDigits: 2 }))

// 123456 -> '123 456'
console.log(thousandify(123456, { thousandSeparator: ' ' }))
```
# Syntax
```js
thousandify(currency, option)
```
## `currency`
Required, `<Number | BigInt | String>`

## `option`
Optional, the default value is:
```js
{
    thousandSeparator: ',', 
    decimalSeparator: '.',
    decimalDigits: false
}
```
1. `thousandSeparator`: `<String>`
The separator of thousands number string

2. `decimalSeparator`: `<String>`
The decimal separator

3. `decimalDigits`: `<Number | Falsy>`
- Falsy: Do not handle the dicimal
    ```js
    // 123456 -> '123,456'
    console.log(thousandify(123456))

    // 123456.1 -> '123,456.1'
    console.log(thousandify(123456.1))

    // 123456.123 -> '123,456.123'
    console.log(thousandify(123456.123))
    ```

- Number: The count of decimal
    ```js
    // 123456 -> '123,456.00'
    console.log(thousandify(123456, { decimalDigits: 2 }))

    // 123456.1-> '123,456.10'
    console.log(thousandify(123456.1, { decimalDigits: 2 }))

    // 123,456.123 -> '123,456.12'
    console.log(thousandify(123456.123, { decimalDigits: 2 }))

    // 123,456.123 -> '123,456'
    console.log(thousandify(123456.123, { decimalDigits: 0 }))
    ```

# Run UT
To run the test suite, first install the dependencies, then run `npm test`:
```js
$ npm install
$ npm test
```