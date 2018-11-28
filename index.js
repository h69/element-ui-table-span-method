let rowspanArray

function spanRow({ row, column, rowIndex, columnIndex }, data, option) {
  if (rowIndex === 0 && columnIndex === 0) {
    computeSpanRow(data, option)
  }

  if (is(option, columnIndex)) {
    const rowspan = rowspanArray[columnIndex][rowIndex]
    const colspan = rowspan > 0 ? 1 : 0

    return {
      rowspan: rowspan,
      colspan: colspan
    }
  }

  return {
    rowspan: 1,
    colspan: 1
  }
}

function computeSpanRow(data, option) {
  rowspanArray = []

  let tempRow= []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < option.length; j++) {
      let index = option[j].index;
      let field = option[j].field;

      if (i === 0) {
        tempRow[index] = 0
        rowspanArray[index] = []
        rowspanArray[index].push(1)

      } else {
        if (data[i][field] === data[i - 1][field]) {
          rowspanArray[index][tempRow[index]] += 1
          rowspanArray[index].push(0)

        } else {
          rowspanArray[index].push(1)
          tempRow[index] = i
        }
      }
    }
  }
}

function is(option, index) {
  for (let i = 0; i < option.length; i++) {
    if (option[i].index === index) {
      return true
    }
  }
  return false
}

export { spanRow }