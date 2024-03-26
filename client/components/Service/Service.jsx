import React from 'react';
import Image from 'next/image';

import Style from './Service.module.css';
import images from '../../img';

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        {/* 1st item START */}
        <div className={Style.service_box_item}>
          <Image src={images.service1} alt='Filter' width={100} height={100} />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter</h3>
          <p>
            Narrow down your search for the perfect NFT by using filters such as
            collection, rarity, artist, and more. Refine your results to
            discover NFTs that match your preferences and style.
          </p>
        </div>
        {/* 1st item END */}

        {/* 2nd item START */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt='Discover'
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Discover</h3>
          <p>
            Explore a curated selection of NFTs from the fashion NFT shop.
            Discover unique collections, trending artists, and exclusive pieces
            that reflect the latest trends and styles in the fashion industry.
          </p>
        </div>
        {/* 2nd item END */}

        {/* 3rd item START */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt='Connect Wallet'
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect your digital wallet to the fashion NFT shop to start
            trading. Ensure that your wallet is compatible with the shop's
            platform and has sufficient funds to purchase the NFTs you desire.
          </p>
        </div>
        {/* 3rd item END */}

        {/* 4th item START */}
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt='Start trading'
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Begin trading NFTs in the fashion NFT shop by placing bids, making
            offers, or purchasing directly. Engage with other collectors and
            artists in the marketplace, and build your NFT fashion collection
            with pieces that speak to your sense of style and creativity.
          </p>
        </div>
        {/* 4th item END */}
      </div>
    </div>
  );
};

export default Service;
