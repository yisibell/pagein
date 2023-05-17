import get from 'lodash/get'
import type { ConditionValidMap, ArrayOfString, Paging } from './interfaces'

const paging: Paging = (originalData, { pagination, conditions } = {}) => {
  originalData = !originalData ? [] : originalData

  const { currentPage = 0, pageSize = 0 } = pagination || {}

  const start_index = (currentPage - 1) * pageSize
  const end_index = start_index + pageSize
  const originTotal = originalData.length // originalData total data
  const isAllConditionNull =
    !conditions || conditions.every((v) => v.value === '' || v.value === null) // 是否存在有效过滤条件

  let data = []
  let total = 0

  // get all originalData data when all conditions is null character string.
  if (isAllConditionNull) {
    data =
      currentPage && pageSize
        ? originalData.slice(start_index, end_index)
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
        const curr_condition_o = conditions.find((v) => v.key === k) // 某条件信息对象

        if (validMap.hasOwnProperty(k) && curr_condition_o) {
          const curr_condition_o_val = curr_condition_o.value

          const ori_val = get(ori, k)

          /* 匹配方式 S */
          if (curr_condition_o.daterange) {
            // 1.日期范围
            const start = +new Date(
              curr_condition_o_val
                ? (curr_condition_o_val as ArrayOfString)[0]
                : 0
            )
            const end = +new Date(
              curr_condition_o_val
                ? (curr_condition_o_val as ArrayOfString)[1]
                : 0
            )
            const now = +new Date(ori_val)

            validMap[k] = (start <= now && end >= now) || !start
          } else if (curr_condition_o.validHandler) {
            // 2.自定义校验
            validMap[k] = curr_condition_o.validHandler(
              curr_condition_o_val,
              ori_val
            )
          } else {
            // 3.模糊、全匹配
            const fuzzy_ori_val = ori_val.toLowerCase
              ? ori_val.toLowerCase()
              : ori_val
            const fuzzy_curr_condition_o_val = (curr_condition_o_val as string)
              .toLowerCase
              ? (curr_condition_o_val as string).toLowerCase()
              : curr_condition_o_val

            validMap[k] =
              (curr_condition_o.fuzzy
                ? fuzzy_ori_val.search(fuzzy_curr_condition_o_val) !== -1
                : ori_val == curr_condition_o_val) || curr_condition_o_val == ''
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
        ? filteredArr.slice(start_index, end_index)
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
