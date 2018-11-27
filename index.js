let rowspanArray

function span(head, body, rowIndex, columnIndex) {
  if (rowIndex === 0 && columnIndex === 0) {
    computeSpan(head, body)
  }

  if (head[columnIndex].merge) {
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

function computeSpan(head, body) {
  rowspanArray = []

  let rowspanIndex = []
  for (let i = 0; i < body.length; i++) {
    for (let j = 0; j < head.length; j++) {
      if (head[j].merge) {
        if (i === 0) {
          rowspanIndex[j] = 0
          rowspanArray[j] = []
          rowspanArray[j].push(1)

        } else {
          if (body[i][head[j].mergeField] === body[i - 1][head[j].mergeField]) {
            rowspanArray[j][rowspanIndex[j]] += 1
            rowspanArray[j].push(0)

          } else {
            rowspanArray[j].push(1)
            rowspanIndex[j] = i
          }
        }
      }
    }
  }
}

export { span }
