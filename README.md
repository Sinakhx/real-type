# **@sinakhx/real-type**
![npm](https://img.shields.io/npm/v/@sinakhx/real-type?color=%239f9f9f&style=flat-square)
![license](https://img.shields.io/npm/l/@sinakhx/real-type?color=red&style=flat-square)
![tests](https://img.shields.io/badge/tests-100%25-green?style=flat-square)
![types](https://img.shields.io/npm/types/@sinakhx/real-type?style=flat-square)

get real type of JavaScript's built-in data structures

## **Why?**
JavaScript's `typeof` operator is a joke.

```js
typeof null       // "object"
typeof {}         // "object"
typeof []         // "object"
typeof new Date() // "object"
```

in order to overcome such ambiguity, people use the following way to be more specific:

```js
Object.prototype.toString.call(new Date()) // "[object Date]"
```

which is far more better, but still has got it's own limitations:

```js
Object.prototype.toString.call(NaN) // "[object Number]"
Object.prototype.toString.call(class Foo{}) // "[object Function]"
```

if you find it silly to treat `NaN` as `number` or classes as functions or even using `Object.prototype.toString.call` to get an array-like string, you can use `@sinakhx/real-type` instead:

```js
realTypeOf(null)        // "Null"
realTypeOf({})          // "Object"
realTypeOf([])          // "Array"
realTypeOf(new Date())  // "Date"
realTypeOf(NaN)         // "NaN"
realTypeOf(class Foo{}) // "Class"
realTypeOf(async () => {}) // "AsyncFunction"
realTypeOf(new WeakMap()) // "WeakMap"
// ...
```

## **Installation**

```bash
npm install @sinakhx/real-type
# or
yarn add @sinakhx/real-type
```

## **Usage**

```js
import realTypeOf from '@sinakhx/real-type';
// or if you are using commonjs:
const realTypeOf = require('@sinakhx/real-type/dist/index.cjs').default;

const customType = realTypeOf(new URL('http://example.com'));
console.log(customType); // "URL"
```

____________________________________
### **Want More Examples?**
see the [tests folder][tests-url] for more detailed examples.

____________________________________
### **Contributing**
Please feel free to open an issue or create a pull request to add a new feature or fix a bug. (see [contributing][contribution-url] for more details)

____________________________________

## **License**

The [MIT License][license-url] (MIT)

&copy; 2022 Sina Khodabandehloo

[tests-url]: https://github.com/Sinakhx/real-type/tree/main/__tests__/
[contribution-url]:  https://github.com/Sinakhx/real-type/blob/main/CONTRIBUTING.md
[changelog-url]:  https://github.com/Sinakhx/real-type/blob/main/CHANGELOG.md
[license-url]:  https://github.com/Sinakhx/real-type/blob/main/LICENSE