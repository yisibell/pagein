import type { PagingReturns, Options, Origin, Condition } from '../src/interface'

declare function paging(
  origin: Origin,
  options?: Options,
  condition?: Condition
): PagingReturns

export { paging }
