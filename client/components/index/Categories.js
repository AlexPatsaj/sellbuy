import React from 'react';
import Link from 'next/link';
import CategoriesList from './CategoriesList';
import ProductsSlider from './ProductsSlider';
//import BrandsAndHashtags from './BrandsAndHashtags';

import ProductSlider from '../offers/ProductSlider';

import CategoriesStyles from '../../static/comp-styles/index/Categories.scss';


export default class Categories extends React.Component {
  constructor(props) {
    super (props);
    this.state = {}
  }

  render() {
    return <section className="hp-categories CategoriesSlider">
      <div className="CategoriesSlider-wrapper">
        <CategoriesList />
        <ProductSlider />
      </div>
      <style jsx global>{CategoriesStyles}</style>
    </section>
  }
};
