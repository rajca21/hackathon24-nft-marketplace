import React from 'react';

import Style from '../styles/index.module.css';
import { Hero, Service } from '../components/components_index';

const Home = () => {
  return (
    <div className={Style.homePage}>
      <Hero />
      <Service />
    </div>
  );
};

export default Home;
