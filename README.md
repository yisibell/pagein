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
const originalData = [
  { a: 'bar' },
  { a: 'bar2' },
  { a: 'foo' },
  { a: 'foo2' }
]

// Define conditions
const conditions = [
  { key: 'a', value: 'foo' }
]

// Query
const { total, data } = paging(originalData, { conditions } )

// Results
console.log(total) // 1
console.log(data) // [{ a: 'foo' }]
```

- Enable pagination, query based on conditions.

``` js
import { paging } from 'pagein'

// Original data
const originalData = [
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

// Query
const { total, data } = paging(originalData, { pagination , conditions })

// Results
console.log(total) // 3
console.log(data) // [{ a: 'foo' }, { a: 'foo' }]
```

- Complex data structures.

``` js
import { paging } from 'pagein'

// Original data
const originalData = [
  { a: { b: 'foo', c: 3 } },
  { a: { b: 'foo2' } },
  { a: { b: 'foo3' } },
  { a: { b: 'foo', c: 2 } },
  { a: { b: 'bar', c: 1 } },
]

// Define conditions
const conditions = [
  { key: 'a.b', value: 'foo' }
]

// Query
const { total, data } = paging(originalData, { conditions })

// Results
console.log(total) // 2
console.log(data) // [{ a: { b: 'foo', c: 3} }, { a: { b: 'foo', c: 2 } }]
```

- `fuzzy` condition.

``` js
import { paging } from 'pagein'

// Original data
const originalData = [
  { a: 'hello' },
  { a: 'hell' },
  { a: '222hello' },
  { a: 'hello111' },
  { a: 'heaaallo' },
]

// Define conditions
const conditions = [
  { key: 'a', value: 'hello', fuzzy: true }
]

// Query
const { total, data } = paging(originalData, { conditions })

// Results
console.log(total) // 3
console.log(data) // [{ a: 'hello'}, { a: '222hello'}, { a: 'hello111'}]
```

- `daterange` condition.


``` js
import { paging } from 'pagein'

// Original data
const originalData = [
  { date: '2023-01-02' },
  { date: '2024-01-03' },
  { date: '2020-01-02' },
  { date: '2023-10-20' },
  { date: '2023-01-09' },
]

// Define conditions
const conditions = [
  { key: 'date', value: ['2023-01-01', '2023-01-10'], daterange: true }
]

// Query
const { total, data } = paging(originalData, { conditions })

// Results
console.log(total) // 2
console.log(data) // [{ date: '2023-01-02' },  { date: '2023-01-09' }]
```

- `validHandler`.

``` js
import { paging } from 'pagein'

// Original data
const originalData = [
  { a: 1, b: 2 },
  { a: 3, b: 2 },
  { a: 1, b: 5 },
  { a: 1, b: 6 },
  { a: 1, b: 2 },
]

// Define conditions
const conditions = [
  { 
    key: 'a', 
    value: 3, 
    validHandler(conditionValue, originalValue) {
      return conditionValue === originalValue
    } 
  }
]

// Query
const { total, data } = paging(originalData, { conditions })

// Results
console.log(total) // 1
console.log(data) // [{ a: 3, b: 2 }]
```