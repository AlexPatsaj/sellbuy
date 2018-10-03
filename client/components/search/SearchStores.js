import React from "react";
import Link from 'next/link';

import SearchStoreItem from './SearchStoreItem';
import Pagination from '../general/Pagination';
import Dropdown from '../general/Dropdown';

import styles from '../../static/comp-styles/search/SearchStores.scss';

const dummyData = {
  stores: [
    {id: '1', name: 'Emma Greens', rating: 4, logo: 'static/images/shop-logo.jpg', address: 'Manama, Bahrain', tags: ['fashion', 'accessories', 'shoes'], discount: '50% OFF', items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/shop-product-1.png'], itemsCount: 128, followers: '8.6K'},
    {id: '2', name: 'Emma Greens', rating: 4, logo: 'static/images/shop-logo.jpg', address: 'Manama, Bahrain', tags: ['fashion', 'accessories', 'shoes'], discount: '50% OFF', items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/shop-product-1.png'], itemsCount: 128, followers: '8.6K'},
    {id: '3', name: 'Emma Greens', rating: 4, logo: 'static/images/shop-logo.jpg', address: 'Manama, Bahrain', tags: ['fashion', 'accessories', 'shoes'], discount: '50% OFF', items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/shop-product-1.png'], itemsCount: 128, followers: '8.6K'}
  ],
  storeStatus: ["Test1", "Test2", "Test3", "Test4", "Test5"],
  responseRate: ["Test1", "Test2", "Test3", "Test4", "Test5"],
  sortby: ["Lowest Price", "Highest Rating","Nearest on Map"],
  counts: ["10", "50", "Show All"],
};

export default class SearchStores extends React.Component {
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
      <div className="sbp-search-stores">
        <div className="sbp-search-stores__filter-btn" onClick={this.handleChangeFilterOpen.bind(this)}>Filter</div>
        <div className="sbp-search-stores__header">
          <div className={`sbp-search-stores__filter ${filterOpen ? 'open' : ''}`}>
            <h2 className="sbp-search-stores__filter-mobile-label">Filter</h2>
            <Dropdown options={dummyData.storeStatus} default='Store Status'/>
            <Dropdown options={dummyData.responseRate} default='Response Rate'/>
          </div>
          <div className="sbp-search-stores__sort">
            <span className="sbp-search-stores__sort-label">Sort by:</span>{' '}<Dropdown options={dummyData.sortby} default='Storename'/>
          </div>
          <div className="sbp-search-stores__counts">
            <span className="sbp-search-stores__filter-label">Show:</span><a className="active">10</a> <a>50</a> <a>Show All</a>
            <Dropdown options={dummyData.counts} default='10'/>
          </div>
        </div>
        {
          dummyData.stores.map((data) => (
            <SearchStoreItem {...data} />
          ))
        }
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