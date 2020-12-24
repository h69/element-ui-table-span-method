<p align="center"><a href="https://element.eleme.io/"><img src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg" alt="element ui"></a></p>

<p align="center">
  <a href="https://npmcharts.com/compare/element-ui-table-span-method?minimal=true"><img src="https://img.shields.io/npm/dm/element-ui-table-span-method.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/element-ui-table-span-method"><img src="https://img.shields.io/npm/v/element-ui-table-span-method.svg" alt="version"></a>
  <a href="https://github.com/h69/element-ui-table-span-method/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/element-ui-table-span-method.svg" alt="license"></a>
</p>

<h2 align="center">element-ui-table-span-method</h2>

Element-UI [el-table](https://element.eleme.io/#/en-US/component/table)'s attribute `span-method`.

---

## Installing

```
npm install element-ui-table-span-method
```

## Usage

```javascript
import { spanRow } from "element-ui-table-span-method";
```

## API

#### spanRow({ row, column, rowIndex, columnIndex }, data, option)

Span table's row.

```html
<template>
  <el-table :data="data" :span-method="onSpanMethod">
    <el-table-column prop="field1" label="field1"> </el-table-column>
    <el-table-column prop="field2" label="field2"> </el-table-column>
    <el-table-column prop="field3" label="field3"> </el-table-column>
  </el-table>
</template>

<script>
import { spanRow } from "element-ui-table-span-method";

export default {
  data() {
    return {
      data: [
        { field1: "A", field2: "a", field3: "1" },
        { field1: "A", field2: "a", field3: "2" },
        { field1: "A", field2: "b", field3: "3" }
      ],
      option: [
        { index: 0, field: "field1" },
        { index: 1, field: "field2" }
      ]
    };
  },
  methods: {
    onSpanMethod({ row, column, rowIndex, columnIndex }) {
      return spanRow(
        { row, column, rowIndex, columnIndex },
        this.data,
        this.option
      );
    }
  }
};
</script>
```

<table >
  <thead>
    <tr>
      <th>field1</th>
      <th>field2</th>
      <th>field3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>a</td>
      <td>1</td>
    </tr>
    <tr>
      <td>A</td>
      <td>a</td>
      <td>2</td>
    </tr>
    <tr>
      <td>A</td>
      <td>b</td>
      <td>3</td>
    </tr>
  </tbody>
</table>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓

<table>
  <thead>
    <tr>
      <th>field1</th>
      <th>field2</th>
      <th>field3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">A</td>
      <td rowspan="2">a</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>b</td>
      <td>3</td>
    </tr>
  </tbody>
</table>