import React from "react";
import Link from 'next/link';

import SearchBrandItem from './SearchBrandItem';
import Pagination from '../general/Pagination';

import styles from '../../static/comp-styles/search/SearchBrands.scss';

const dummyData = {
  brands: [
    {id: '1', name: 'Bershka', count: 10245, items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png']},
    {id: '2', name: 'Ray-Ban', count: 10245, items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png']},
    {id: '3', name: 'Butlers', count: 10245, items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png']},
    {id: '4', name: 'Bershka', count: 10245, items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png']},
    {id: '5', name: 'Ray-Ban', count: 10245, items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png']},
    {id: '6', name: 'Butlers', count: 10245, items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png']},
    {id: '7', name: 'Bershka', count: 10245, items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png']},
    {id: '8', name: 'Ray-Ban', count: 10245, items: ['http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png', 'http://138.68.255.94:3001/square/images/electronics-main.png']},
  ],
};

export default function SearchBrands() {
  return (
    <div className="sbp-search-brands">
      <div className="sbp-search-brands__content">
        {
          dummyData.brands.map((data) => (
            <SearchBrandItem {...data} />
          ))
        }
      </div>
      <Pagination />
      <style jsx global>{styles}</style>
    </div>
  )
}