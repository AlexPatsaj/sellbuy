import { createSelector } from 'reselect';

export const selectState = () => state => state.friends;

export const selectList = () => createSelector(
  selectState(),
  search => {
    return search.list
  }
);