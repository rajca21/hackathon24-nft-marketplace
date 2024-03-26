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
          <h1>Explore, collect and sell NFT fashion items</h1>
          <p>
            Welcome to our store, where innovation meets haute couture in the
            digital realm! Join us on this journey as we revolutionize the
            fashion industry one pixel at a time.
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
