Named import
---

<p align="right">
  <a href="https://www.npmjs.com/package/named-import">
    <img alt="Npm version" src="https://badge.fury.io/js/named-import.svg">
  </a>
  <a href="https://travis-ci.org/59naga/named-import">
    <img alt="Build Status" src="https://travis-ci.org/59naga/named-import.svg?branch=master">
  </a>
</p>

a dynamic import sugar syntax function.

Installation
---
```
yarn add named-import
```

Usage
---

[Real dynamic-import syntax will force the `.default`](https://github.com/tc39/proposal-dynamic-import/issues/37), but this `named-import` will omit it.

```js
import namedImport from "named-import";
(async () => {
  var assert = (await import("assert")).default;
  // or
  var assert = await namedImport("assert");
})();
```

Also change the second argument to import another named.

```js
import namedImport from "named-import";
(async () => {
  var strictEqual = (await import("assert")).strictEqual;
  // or
  var strictEqual = await namedImport("assert", "strictEqual");
})();
```

Incompatible Code Splitting
---
Can't be used for [code-splitting of webpack.](https://webpack.js.org/guides/code-splitting/) (TODO)

License
---
MIT
