import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Style from '../styles/collection.module.css';
import images from '../img';
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from '../pageComponents/collection/collectionIndex';
import { Brand, Slider } from '../components/components_index';
import { Filter } from '../components/components_index';

const collection = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  const collectionArray = [
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
  ];

  return (
    <div className={Style.collection}>
      {isAuth && (
        <>
          <Banner bannerImage={images.creatorbackground1} />
          <CollectionProfile />
          <NFTCardTwo NFTData={collectionArray} />
          <Filter />
          <Slider />
          <Brand />
        </>
      )}
    </div>
  );
};

export default collection;
