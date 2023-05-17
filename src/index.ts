import get from 'lodash/get'
import type { ConditionValidMap, ArrayOfString, Paging } from './interfaces'

const paging: Paging = (originalData, { pagination, conditions } = {}) => {
  originalData = !originalData ? [] : originalData

  const { currentPage = 0, pageSize = 0 } = pagination || {}

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const originTotal = originalData.length // originalData total data
  const isAllConditionNull =
    !conditions || conditions.every((v) => v.value === '' || v.value === null) // 是否存在有效过滤条件

  let data = []
  let total = 0

  // get all originalData data when all conditions is null character string.
  if (isAllConditionNull) {
    data =
      currentPage && pageSize
        ? originalData.slice(startIndex, endIndex)
        : originalData
    total = originalData.length
  } else {
    // filter data
    const filteredArr = originalData.filter((ori) => {
      const validMap = conditions.reduce((o, v) => {
        o[v.key] = true
        return o
      }, {} as ConditionValidMap)

      for (const k in validMap) {
        const currConditionObject = conditions.find((v) => v.key === k) // 某条件信息对象

        if (validMap.hasOwnProperty(k) && currConditionObject) {
          const currConditionValue = currConditionObject.value

          const currOriginalValue = get(ori, k)

          /* 匹配方式 S */
          if (currConditionObject.daterange) {
            // 1.日期范围
            const start = +new Date(
              currConditionValue ? (currConditionValue as ArrayOfString)[0] : 0
            )
            const end = +new Date(
              currConditionValue ? (currConditionValue as ArrayOfString)[1] : 0
            )
            const now = +new Date(currOriginalValue)

            validMap[k] = (start <= now && end >= now) || !start
          } else if (currConditionObject.validHandler) {
            // 2.自定义校验
            validMap[k] = currConditionObject.validHandler(
              currConditionValue,
              currOriginalValue
            )
          } else {
            // 3.模糊、全匹配
            const currFuzzyOriginalValue = currOriginalValue.toLowerCase
              ? currOriginalValue.toLowerCase()
              : currOriginalValue
            const currFuzzyConditionValue = (currConditionValue as string)
              .toLowerCase
              ? (currConditionValue as string).toLowerCase()
              : currConditionValue

            validMap[k] =
              (currConditionObject.fuzzy
                ? currFuzzyOriginalValue.search(currFuzzyConditionValue) !== -1
                : currOriginalValue === currConditionValue) ||
              currConditionValue == ''
          }
          /* 匹配方式 E */
        }
      }

      for (const k in validMap) if (!validMap[k]) return false

      return true
    })

    // pagination data from conditions filter
    data =
      currentPage && pageSize
        ? filteredArr.slice(startIndex, endIndex)
        : filteredArr
    // pagination total data
    total = filteredArr.length
  }

  return {
    total,
    originTotal,
    data,
    currentPage,
    pageSize,
  }
}

export { paging }
