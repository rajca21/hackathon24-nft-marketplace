import React from 'react';

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
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <NFTCardTwo NFTData={collectionArray} />
      <Filter />
      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
