<p align="center"><a href="https://element.eleme.io/"><img src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg" alt="element ui"></a></p>

<p align="center">
  <a href="https://npmcharts.com/compare/element-ui-table-span-method?minimal=true"><img src="https://img.shields.io/npm/dm/element-ui-table-span-method.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/element-ui-table-span-method"><img src="https://img.shields.io/npm/v/element-ui-table-span-method.svg" alt="version"></a>
  <a href="https://github.com/adamearthhuang/element-ui-table-span-method/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/element-ui-table-span-method.svg" alt="license"></a>
</p>

<h2 align="center">element-ui-table-span-method</h2>

Element UI 表格单元格动态合并模块，适用于 [el-table](https://element.eleme.io/#/zh-CN/component/table) 的 `span-method` 属性。

---

## 安装
```
npm install element-ui-table-span-method --save
```

## 使用
```javascript
import { spanRow } from 'element-ui-table-span-method'
```

## 方法
#### spanRow({ row, column, rowIndex, columnIndex }, data, option)
纵向合并单元格，即一个单元格占据多行。
* `{ row, column, rowIndex, columnIndex }` 由 el-table 的属性 `span-method` 的回调方法的参数传入。
* `data` 形如 `{ field1, field2, field3, ... }` 的对象数组。
* `option` 形如 `{ index: 第几列, filed: '合并字段' }` 的对象数组。

<table>
  <thead>
     <tr><th>group</th><th>member</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="3">A</td><td>a</td></tr>
    <tr><td>b</td></tr>
    <tr><td>c</td></tr>
  </tbody>
</table>

## 范例
```html
<template>
  <el-table :span-method="onSpanMethod"></el-table>
</template>

<script>
import { span } from 'element-ui-table-span-method'

...

data = [
  { group: 'A', member: 'a' },
  { group: 'A', member: 'b' },
  { group: 'A', member: 'c' },
]

option = [
  { index: 0, field: 'group' }
]

...

onSpanMethod({ row, column, rowIndex, columnIndex }) {
  spanRow({ row, column, rowIndex, columnIndex }, this.data, this.option)
}

...

</script>
```
