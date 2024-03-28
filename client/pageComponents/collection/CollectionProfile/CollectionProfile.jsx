import React from 'react';
import Image from 'next/image';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';

import Style from './CollectionProfile.module.css';

const CollectionProfile = ({ collectionData }) => {
  const cardArray = [
    {
      raised: 0.12,
      growth: 0.9,
      label: '7 days',
    },
    {
      raised: 1.78,
      growth: 4.1,
      label: '1 month',
    },
    {
      raised: 4.13,
      growth: 14.7,
      label: '6 months',
    },
    {
      raised: 6.61,
      growth: 23.1,
      label: '1 year',
    },
  ];

  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            src={collectionData.imageCover}
            alt='NFT'
            width={800}
            height={800}
            className={Style.collectionProfile_box_left_img}
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href='#'>
              <TiSocialFacebook />
            </a>
            <a href='#'>
              <TiSocialInstagram />
            </a>
            <a href='#'>
              <TiSocialLinkedin />
            </a>
            <a href='#'>
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>{collectionData.name}</h1>
          <p>{collectionData.description}</p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, index) => (
              <div
                className={Style.collectionProfile_box_middle_box_item}
                key={index + 1}
              >
                <div>
                  <small>{el.label}</small>
                </div>
                <div>
                  <p>Raised: {el.raised} ETH</p>
                </div>
                <div>
                  <span>Growth: +{el.growth}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;
