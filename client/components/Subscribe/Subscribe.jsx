import React from 'react';
import Image from 'next/image';
import { RiSendPlaneFill } from 'react-icons/ri';

import Style from './Subscribe.module.css';
import images from '../../img';

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a thing!</h2>
          <p>
            Subscribe to GlamChain exclusive newsletter and be the first one to
            know all about new drops!
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get More Discounts</small>
          </div>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Premium Content</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type='email' />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt='newsletter'
            height={600}
            width={700}
            className={Style.subscribe_box_right_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
