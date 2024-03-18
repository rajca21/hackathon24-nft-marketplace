import React from 'react';

import Style from '../styles/index.module.css';
import {
  BigNFTSlider,
  Category,
  Collection,
  Filter,
  Hero,
  NFTCards,
  Service,
  Subscribe,
} from '../components/components_index';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <Hero />
      <Service />
      <BigNFTSlider />
      <Collection />
      <Filter />
      <NFTCards />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
