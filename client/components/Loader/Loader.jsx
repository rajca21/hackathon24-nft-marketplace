import React from 'react';
import Image from 'next/image';

import Style from './Loader.module.css';
import images from '../../img';

const Loader = ({ message }) => {
  return (
    <div className={Style.Loader}>
      <div className={Style.Loader_box}>
        <div className={Style.Loader_box_img}>
          <Image
            src={images.loader}
            alt='loader-spinner'
            width={200}
            height={200}
            objectFit='cover'
            className={Style.Loader_box_img_img}
          />
        </div>

        <div className={Style.Loader_box_message}>
          {message && <h2>{message}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Loader;
