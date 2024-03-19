import React from 'react';
import Image from 'next/image';
import { DiJqueryLogo } from 'react-icons/di';

import Style from './Brand.module.css';
import images from '../../img';
import { Button } from '../components_index';

const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <a href='/'>
            <DiJqueryLogo className={Style.Brand_box_left_logo} />
          </a>
          <h1>Earn with GlamChain</h1>
          <p>A creative company that leads and inspires.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button btnName='Create' handleClick={() => {}} />
            <Button btnName='Discover' handleClick={() => {}} />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.logo} alt='brand logo' width={450} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
