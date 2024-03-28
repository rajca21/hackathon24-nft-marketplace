import React from 'react';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';

import Style from './NFTCardTwo.module.css';
import { LikeProfile } from '../../../components/components_index';

const NFTCardTwo = ({ NFTData }) => {
  return (
    <div className={Style.NFTCardTwo}>
      {NFTData?.map((el, index) => (
        <div key={index + 1}>
          <div className={Style.NFTCardTwo_box}>
            <div className={Style.NFTCardTwo_box_like}>
              <div className={Style.NFTCardTwo_box_like_box}>
                <div className={Style.NFTCardTwo_box_like_box_box}>
                  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                  <p>
                    <AiFillHeart />
                    <span>{el.rating}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCardTwo_box_img}>
              <Image
                src={el.imageCover}
                alt='NFT'
                width={500}
                height={500}
                objectFit='cover'
                className={Style.NFTCardTwo_box_img_img}
              />
            </div>

            <div className={Style.NFTCardTwo_box_info}>
              <div className={Style.NFTCardTwo_box_info_left}>
                <LikeProfile />
                <p>{el.name}</p>
              </div>
            </div>

            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Current Bid</small>
                <p>{el.price} ETH</p>
              </div>
              <p className={Style.NFTCardTwo_box_price_stock}>
                <MdVerified /> <span>#{el.tokenID}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCardTwo;
