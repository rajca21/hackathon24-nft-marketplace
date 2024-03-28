import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

import Style from './NFTDetailsImg.module.css';

const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const router = useRouter();

  const likeNFT = () => {
    setLike(!like);
  };
  const openDescription = () => {
    setDescription(!description);
  };
  const openDetails = () => {
    setDetails(!details);
  };

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImage className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={likeNFT}>
              {like ? (
                <AiFillHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiOutlineHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>{nft.rating}</span>
            </p>
          </div>

          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <Image
              src={nft.imageCover}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt='NFT'
              width={700}
              height={800}
              objectFit='cover'
            />
          </div>
        </div>

        <div
          className={Style.NFTDetailsImg_box_description}
          onClick={openDescription}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>{nft.description}</p>
          </div>
        )}

        <div className={Style.NFTDetailsImg_box_details} onClick={openDetails}>
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            <p>
              <small>Contract Address</small>
              <br></br>
              {router.query.seller}
            </p>
            <p>
              <small>Token ID</small>
              &nbsp; &nbsp; {nft.tokenID}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
