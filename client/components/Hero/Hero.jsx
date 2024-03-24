import React from 'react';
import Image from 'next/image';

import Style from './Hero.module.css';
import images from '../../img';
import { Button } from '../components_index';

const Hero = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect and sell NFTs</h1>
          <p>
            Discover the most outstanding fashion NFTs and collect them. Create
            your own NFTs and offer them for auction!
          </p>
          <Button btnName='Begin your journey' />
        </div>

        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt='hero-section'
            width={600}
            height={600}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
