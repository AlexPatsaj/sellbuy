import { createSelector } from 'reselect';

export const selectState = () => state => state.search;

export const selectValue = () => createSelector(
  selectState(),
  search => search.value
);