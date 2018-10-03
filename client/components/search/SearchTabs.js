import React from "react";
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SearchItems from './SearchItems';
import SearchStores from './SearchStores';
import SearchBrands from './SearchBrands';

import styles from '../../static/comp-styles/search/SearchTabs.scss';

export default function SearchTabs({ active }) {
  return (
    <React.Fragment>
      <Tabs defaultIndex={active}>
        <TabList>
          <Tab>Items</Tab>
          <Tab>Stores</Tab>
          <Tab>Brands</Tab>
        </TabList>
        <TabPanel>
          <SearchItems />
        </TabPanel>
        <TabPanel>
          <SearchStores />
        </TabPanel>
        <TabPanel>
          <SearchBrands />
        </TabPanel>
      </Tabs>
      <style jsx global>{styles}</style>
    </React.Fragment>
  )
};

SearchTabs.propTypes = {
  active: PropTypes.number,
};