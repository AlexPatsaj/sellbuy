import React from "react";
import InputRange from 'react-input-range';

import Combobox from '../general/Combobox';
import SearchFilterRange from './SearchFilterRange';
import SellerProducts from '../shop/SellerProducts';
import Pagination from '../general/Pagination';

import styles from '../../static/comp-styles/search/SearchItems.scss';

const dummyData = {
  condition: [
    { value: 'all', label: 'All' },
    { value: 'used', label: 'Used' },
    { value: 'new', label: 'New' },
  ],
  brand: [
    { value: 'adidas', label: 'Adidas' },
    { value: 'aldo', label: 'Aldo' },
    { value: 'allsaints', label: 'AllSaints' },
    { value: 'asos', label: 'Asos' },
    { value: 'test1', label: 'Test1' },
    { value: 'test2', label: 'Test2' },
    { value: 'test3', label: 'Test3' },
    { value: 'test4', label: 'Test4' },
    { value: 'test5', label: 'Test5' },
    { value: 'test6', label: 'Test6' },
    { value: 'test7', label: 'Test7' },
    { value: 'test8', label: 'Test8' },
    { value: 'test9', label: 'Test9' },
    { value: 'test10', label: 'Test10' },
  ],
  size: [
    { value: 'small', label: 'Small (S) - UK S, 36' },
    { value: 'medium', label: 'Medium - UK M, 40' },
    { value: 'large', label: 'Large - UK L, 44' },
  ],
  color: [
    { value: 'pink', label: 'Pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'silver', label: 'Silver' },
  ],
};

export default class SearchItems extends React.Component {
  state = {
    filterOpen: false,
  };

  handleChangeFilterOpen() {
    this.setState({
      filterOpen: !this.state.filterOpen
    })
  }

  render() {
    const {
      filterOpen,
    } = this.state;
    return (
      <div className="sbp-search-items">
        <div className="sbp-search-items__filter-btn" onClick={this.handleChangeFilterOpen.bind(this)}>Filter</div>
        <div className={`sbp-search-items__filter ${filterOpen ? 'open' : ''}`}>
          <h2 className="sbp-search-items__filter-mobile-label">Filter</h2>
          <Combobox label="Condition" multi options={dummyData.condition} />
          <Combobox label="Brand" multi search options={dummyData.brand} />
          <Combobox label="Size" multi search options={dummyData.size} />
          <Combobox label="Color" multi search options={dummyData.color} />
          <SearchFilterRange label="Price" min={0} max={1000} measure="$" />
        </div>
        <SellerProducts />
        <Pagination />
        {
          filterOpen && (
            <div className="mobile-bg" onClick={this.handleChangeFilterOpen.bind(this)}>
              <div className="filter-close">
                ×
              </div>
            </div>
          )
        }
        <style jsx global>{styles}</style>
      </div>
    )
  }
}