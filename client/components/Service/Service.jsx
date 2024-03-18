import React from 'react';
import Image from 'next/image';

import Style from './Service.module.css';
import images from '../../img';

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        {/* 1st item START */}
        <div className={Style.service_box_item}>
          <Image src={images.service1} alt='Filter' width={100} height={100} />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsam
            repudiandae nesciunt dignissimos, cum consectetur dolor?
          </p>
        </div>
        {/* 1st item END */}

        {/* 2nd item START */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt='Discover'
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Discover</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsam
            repudiandae nesciunt dignissimos, cum consectetur dolor?
          </p>
        </div>
        {/* 2nd item END */}

        {/* 3rd item START */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt='Connect Wallet'
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsam
            repudiandae nesciunt dignissimos, cum consectetur dolor?
          </p>
        </div>
        {/* 3rd item END */}

        {/* 4th item START */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt='Start trading'
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ipsam
            repudiandae nesciunt dignissimos, cum consectetur dolor?
          </p>
        </div>
        {/* 4th item END */}
      </div>
    </div>
  );
};

export default Service;
