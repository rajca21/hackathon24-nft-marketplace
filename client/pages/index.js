import React from 'react';

import Style from '../styles/index.module.css';
import { Hero } from '../components/components_index';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <Hero />
    </div>
  );
};

export default Home;
