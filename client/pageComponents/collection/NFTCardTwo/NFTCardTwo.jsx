import React, { useState } from 'react';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';

import Style from './NFTCardTwo.module.css';
import { LikeProfile } from '../../../components/components_index';

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeCount(likeCount + 1);
    } else {
      setLike(false);
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <div className={Style.NFTCardTwo}>
      {NFTData?.map((el, index) => (
        <div className={Style.NFTCardTwo_box} key={index + 1}>
          <div className={Style.NFTCardTwo_box_like}>
            <div className={Style.NFTCardTwo_box_like_box}>
              <div className={Style.NFTCardTwo_box_like_box_box}>
                <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                <p onClick={likeNFT}>
                  {like ? <AiFillHeart /> : <AiOutlineHeart />}
                  <span>{likeCount}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCardTwo_box_img}>
            <Image
              src={el.image}
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
            <small>4{index + 2}</small>
          </div>

          <div className={Style.NFTCardTwo_box_price}>
            <div className={Style.NFTCardTwo_box_price_box}>
              <small>Current Bid</small>
              <p>{el.price || index + 4} ETH</p>
            </div>
            <p className={Style.NFTCardTwo_box_price_stock}>
              <MdTimer /> <span>{index + 1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCardTwo;