import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AiFillFire, AiFillHeart } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb';

import Style from './BigNFTSlider.module.css';

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(0);
  const [sliderData, setSliderData] = useState([1, 2, 3, 4, 5]);
  const [creatorData, setCreatorData] = useState({});
  const [collectionData, setCollectionData] = useState({});

  useEffect(() => {
    const getTop5NFTs = async () => {
      const res = await fetch('http://localhost:8000/api/v1/nfts/top-5-nfts', {
        method: 'GET',
      });
      const topNFTsRes = await res.json();
      setSliderData(topNFTsRes.data);

      const resCreator = await fetch(
        `http://localhost:8000/api/v1/users/${topNFTsRes.data[0]?.creator}`,
        {
          method: 'GET',
        }
      );
      const creatorRes = await resCreator.json();
      setCreatorData(creatorRes[0]);

      const resCollection = await fetch(
        `http://localhost:8000/api/v1/collections/${topNFTsRes.data[0]?.nftCollection}`,
        {
          method: 'GET',
        }
      );
      const collectionRes = await resCollection.json();
      setCollectionData(collectionRes.data);
    };

    getTop5NFTs();
  }, []);

  useEffect(() => {
    const getCurrentCreatorAndCollection = async () => {
      const res = await fetch(
        `http://localhost:8000/api/v1/users/${sliderData[idNumber]?.creator}`,
        {
          method: 'GET',
        }
      );
      const creatorRes = await res.json();
      setCreatorData(creatorRes[0]);

      const resCollection = await fetch(
        `http://localhost:8000/api/v1/collections/${sliderData[idNumber]?.nftCollection}`,
        {
          method: 'GET',
        }
      );
      const collectionRes = await resCollection.json();
      setCollectionData(collectionRes.data);
    };

    getCurrentCreatorAndCollection();
  }, [idNumber]);

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData?.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      {sliderData && (
        <div className={Style.bigNFTSlider_box}>
          <div className={Style.bigNFTSlider_box_left}>
            <h2>{sliderData[idNumber]?.name}</h2>
            <div className={Style.bigNFTSlider_box_left_creator}>
              <div className={Style.bigNFTSlider_box_left_creator_profile}>
                <Image
                  src={
                    creatorData?.photo ||
                    'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png'
                  }
                  alt='creator'
                  width={50}
                  height={50}
                  className={Style.bigNFTSlider_box_left_creator_profile_img}
                />
                <div
                  className={Style.bigNFTSlider_box_left_creator_profile_img}
                >
                  <p>Creator</p>
                  <h4>
                    {creatorData?.name}
                    <span>
                      <MdVerified />
                    </span>
                  </h4>
                </div>
              </div>

              <div className={Style.bigNFTSlider_box_left_creator_collection}>
                <AiFillFire
                  className={
                    Style.bigNFTSlider_box_left_creator_collection_icon
                  }
                />
                <div
                  className={
                    Style.bigNFTSlider_box_left_creator_collection_info
                  }
                >
                  <p>Collection</p>
                  <h4>{collectionData?.name}</h4>
                </div>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_bidding}>
              <div className={Style.bigNFTSlider_box_left_bidding_box}>
                <small>Current Price</small>
                <p>{sliderData[idNumber]?.price} ETH</p>
              </div>

              {/* <div className={Style.bigNFTSlider_box_left_button}>
                <Button btnName='View' handleClick={() => {}} />
              </div> */}
            </div>

            <div className={Style.bigNFTSlider_box_left_sliderBtn}>
              <TbArrowBigLeftLine
                className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                onClick={dec}
              />
              <TbArrowBigRightLine
                className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                onClick={inc}
              />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_right}>
            <div className={Style.bigNFTSlider_box_right_box}>
              <Image
                src={sliderData[idNumber]?.imageCover}
                width={900}
                height={900}
                alt='NFT'
                className={Style.bigNFTSlider_box_right_box_img}
              />
              <div className={Style.bigNFTSlider_box_right_box_like}>
                <AiFillHeart />
                <span>{sliderData[idNumber]?.rating}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BigNFTSlider;
