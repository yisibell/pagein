<p align="center">
  <a href="https://www.npmjs.org/package/pagein">
    <img src="https://img.shields.io/npm/v/pagein.svg">
  </a>
  <a href="https://npmcharts.com/compare/pagein?minimal=true">
    <img src="https://img.shields.io/npm/dm/pagein.svg">
  </a>
  <br>
</p>

# pagein

A tiny paging util function.

- [Release Notes](./CHANGELOG.md).

# Installation

``` bash
# yarn
$ yarn add pagein

# npm
$ npm i pagein
```

# APIs
## paging

See [type definition](./src/interfaces/index.ts) here.

```ts
import { paging } from 'pagein'
```

### Basic Usage

-  Do not enable pagination, query based on conditions.

``` js
import { paging } from 'pagein'

// Original data
const ori = [
  { a: 'bar' },
  { a: 'bar2' },
  { a: 'foo' },
  { a: 'foo2' }
]

// Define conditions
const conditions = [
  { key: 'a', value: 'foo' }
]

const { total, data } = paging(ori, { conditions } )

console.log(total) // 1
console.log(data) // [{ a: 'foo' }]
```

- Enable pagination, query based on conditions.

``` js
import { paging } from 'pagein'

// Original data
const ori = [
  { a: 'bar' },
  { a: 'bar2' },
  { a: 'foo' },
  { a: 'foo2' },
  { a: 'foo2' },
  { a: 'foo2' },
  { a: 'foo' },
  { a: 'foo' }
]

// Pagination control
const pagination = {
  currentPage: 1, 
  pageSize: 2
}

// Define conditions
const conditions = [
  { key: 'a', value: 'foo' }
]

const { total, data } = paging(ori, { pagination , conditions })

console.log(total) // 3
console.log(data) // [{ a: 'foo' }, { a: 'foo' }]
```


