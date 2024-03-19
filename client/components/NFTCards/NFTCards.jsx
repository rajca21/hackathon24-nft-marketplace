import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';

import Style from './NFTCards.module.css';
import images from '../../img';

const NFTCards = () => {
  const [like, setLike] = useState(true);

  const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const likeNft = () => {
    setLike(!like);
  };

  return (
    <div className={Style.NFTCard}>
      {featureArray.map((el, index) => (
        <div key={index + 1} className={Style.NFTCard_box}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={images.nft_image_1}
              alt='NFT'
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
          </div>

          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_box_update_left_like}
                onClick={likeNft}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                )}{' '}
                22
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining Time</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>Clone #17347</h4>

                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>1.0061 ETH</p>
                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>61 in Stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCards;