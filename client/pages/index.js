import React from 'react';

import Style from '../styles/index.module.css';
import {
  BigNFTSlider,
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
      <Subscribe />
    </div>
  );
};

export default Home;
