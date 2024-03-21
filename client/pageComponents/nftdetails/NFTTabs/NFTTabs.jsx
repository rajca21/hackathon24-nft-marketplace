import React from 'react';
import Image from 'next/image';

import Style from './NFTTabs.module.css';

const NFTTabs = ({ dataTab }) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, index) => (
        <div className={Style.NFTTabs_box} key={index + 1}>
          <Image
            src={el}
            alt='profile image'
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer $770 by <span>User Name</span>
            </span>

            <small>Mar 21 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
