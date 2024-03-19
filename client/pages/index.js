import React from 'react';

import Style from '../styles/index.module.css';
import {
  BigNFTSlider,
  Brand,
  Category,
  Collection,
  Filter,
  Hero,
  NFTCards,
  Service,
  Slider,
  Subscribe,
} from '../components/components_index';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <Hero />
      <Service />
      <BigNFTSlider />
      <Slider />
      <Collection />
      <Filter />
      <NFTCards />
      <Category />
      <Subscribe />
      <Brand />
    </div>
  );
};

export default Home;
