import React from 'react';
import Image from 'next/image';

import Style from './Banner.module.css';

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          objectFit='cover'
          alt='background'
          width={0}
          height={150}
          sizes='100vw'
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          objectFit='cover'
          alt='background'
          width={1600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
