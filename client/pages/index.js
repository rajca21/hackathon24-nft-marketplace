import React from 'react';

import Style from '../styles/index.module.css';
import {
  BigNFTSlider,
  Category,
  Hero,
  Service,
  Subscribe,
} from '../components/components_index';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <Hero />
      <Service />
      <BigNFTSlider />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
