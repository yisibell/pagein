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

# Usage

## 参数

1. **ori {Array of Object}**： 源数据（必需）。

2. **options.pagination {Object}**： 分页控制。

``` js
{
  currentPage: 1, // 当前页码
  pageSize: 10 // 每页条数
}
```

3. **options.conditions {Array of Object}**： 查询条件。

``` js
const conditions = [
  {
    // 检索字段、属性键名（必需）。
    key: 'a', 
    // 当前检索值（必需）。
    value: '', 
    // 是否启用模糊搜索
    // 当前启用该字段时，将不会区分大小写，只要被检索值中存在 value 即被匹配成功。
    fuzzy: false, 
    // 是否对该字段启用日期范围检索
    // 设置了该属性为 true 后，value 的格式需为 [2019-02-13, 2020-02-14]，两个值可以被 new Date() 解析即可。
    daterange: false, 
    // 自定义检索方法，该方法被传入两个参数：`conditionValue`（当前条件字段值，即 value ），`originalValue`（源数据中对应字段值）。
    // 返回 true 则表示该值满足条件，被放入查询结果中。
    validHandler: (conditionValue, originalValue) => {}
  }
  // ...
]
```

为了应对复杂源数据类型， `key` 支持按属性路径检索。例如：

``` js
import { paging } from 'pagein'

const ori = [
  { a: { b: 'bar'} },
  { a: { b: 'foo'} },
  { a: { b: 'foo1'} },
]

const conditions = [
  {
    key: 'a.b',
    value: 'foo'
  }
]

const { data } = paging(ori, { conditions } )
console.log(data) // [{ a: { b: 'foo'} }]
```


## 返回

**{object}**：返回一个查询结果对象。

``` js
{
  total, // 查询结果总条数
  originTotal, // 源数据总条数
  data, // 查询结果
  currentPage, // 当前页码
  pageSize // 当前页数据条数
}
```

## 基本使用

1. 不启用分页，按条件查询。

``` js
import { paging } from 'pagein'

// 源数据
const ori = [
  { a: 'bar' },
  { a: 'bar2' },
  { a: 'foo' },
  { a: 'foo2' }
]

// 查询条件
const conditions = [
  { key: 'a', value: 'foo' }
]

const { total, data } = paging(ori, { conditions } )

console.log(total) // 查询结果总条数，1
console.log(data) // 查询结果, [{ a: 'foo' }]
```

2. 启用分页，按条件查询。

``` js
import { paging } from 'pagein'

// 源数据
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

// 分页控制
const pagination = {
  currentPage: 1, 
  pageSize: 2
}

// 查询条件
const conditions = [
  { key: 'a', value: 'foo' }
]

const { total, data } = paging(ori, { pagination , conditions })

console.log(total) // 查询结果总条数，3
console.log(data) // 查询结果, [{ a: 'foo' }, { a: 'foo' }]
```


