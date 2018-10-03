import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { compose, setDisplayName, pure } from 'recompose';
import { changeGlobalFilter } from '../actions/search';
import { selectValue } from '../selectors/search';
import Header from '../components/header/Header';

export default compose(
  setDisplayName('HeaderContainer'),
  connect(createSelector(
    selectValue(),
    (value) => ({ value })
  ), {
    changeGlobalFilter
  }),
  pure
)(Header)