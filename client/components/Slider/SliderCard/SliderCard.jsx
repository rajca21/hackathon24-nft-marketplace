import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Style from './SliderCard.module.css';

const SliderCard = ({ el, index }) => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image
            src={el.background}
            className={Style.sliderCard_box_img_img}
            alt='slider profile'
            width={500}
            height={300}
            objectFit='cover'
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #{index + 1}</p>
          <div className={Style.sliderCard_box_title_like}>
            <small>{index + 4} 0f 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>{index + 2}.000 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}>
            <small>Remaining time</small>
            <p>
              {index + 1}h : 15m : {index + 4}0s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
