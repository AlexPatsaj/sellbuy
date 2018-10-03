export const CHANGE_GLOBAL_FILTER = 'SELLBUYPAY/SEARCH/CHANGE_GLOBAL_FILTER';

export function changeGlobalFilter(value) {
  return {
    type: CHANGE_GLOBAL_FILTER,
    payload: value,
  }
}