export type OriginalData<T = Record<string, any>> = T[]

export type ArrayOfString = string[]

export type ConditionItemValue = string | number | ArrayOfString

export interface ConditionItem {
  // 检索字段、属性键名（必需）。
  key: string
  // 当前检索值（必需）。
  value: ConditionItemValue
  // 是否启用模糊搜索
  // 当前启用该字段时，将不会区分大小写，只要被检索值中存在 value 即被匹配成功。
  fuzzy?: boolean
  // 是否对该字段启用日期范围检索
  // 设置了该属性为 true 后，value 的格式需为 [2019-02-13, 2020-02-14]，两个值可以被 new Date() 解析即可。
  daterange?: boolean
  /**自定义检索方法，该方法被传入两个参数：`conditionValue`（当前条件字段值，即 value ），`originalValue`（源数据中对应字段值）。*/
  validHandler?: (
    conditionValue: ConditionItemValue,
    originalValue: ConditionItemValue
  ) => boolean
}

export type Conditions = Array<ConditionItem>

export type ConditionValidMap = Record<string, boolean>

export interface Pagination {
  currentPage?: number
  pageSize?: number
}

export interface PagingReturns<T> {
  total: number
  originTotal: number
  data: OriginalData<T>
  currentPage: number
  pageSize: number
}

export interface PagingOptions {
  pagination?: Pagination
  conditions?: Conditions
}

export type Paging = <T>(
  originalData: OriginalData<T>,
  options?: PagingOptions
) => PagingReturns<T>
