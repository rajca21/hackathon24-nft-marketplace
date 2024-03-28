import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdVerified } from 'react-icons/md';

import Style from './DaysComponent.module.css';
import images from '../../../img';

const DaysComponents = ({ el, index }) => {
  return (
    <Link href={{ pathname: '/collection', query: el }}>
      <div className={Style.daysComponent}>
        <div className={Style.daysComponent_box}>
          <div className={Style.daysComponent_box_img}>
            <Image
              src={el.imageCover}
              alt='profile background'
              className={Style.daysComponent_box_img_img}
              width={500}
              height={300}
              objectFit='cover'
            />
          </div>

          <div className={Style.daysComponent_box_profile}>
            <Image
              src={images[`creatorbackground${index + 2}`]}
              alt='profile'
              width={200}
              height={300}
              objectFit='cover'
              className={Style.daysComponent_box_img_1}
            />
            <Image
              src={images[`creatorbackground${index + 4}`]}
              alt='profile'
              width={200}
              height={300}
              objectFit='cover'
              className={Style.daysComponent_box_img_2}
            />
            <Image
              src={images[`creatorbackground${index + 3}`]}
              alt='profile'
              width={200}
              height={300}
              objectFit='cover'
              className={Style.daysComponent_box_img_3}
            />
          </div>

          <div className={Style.daysComponent_box_title}>
            <h2>{el.name}</h2>
            <div className={Style.daysComponent_box_title_info}>
              <div className={Style.daysComponent_box_title_info_profile}>
                <Image
                  src={images.user1}
                  alt='user profile'
                  width={30}
                  height={30}
                  objectFit='cover'
                  className={Style.daysComponent_box_title_info_profile_img}
                />
                <p>
                  Creator
                  <span>
                    User Name{' '}
                    <small>
                      <MdVerified />
                    </small>
                  </span>
                </p>
              </div>

              <div className={Style.daysComponent_box_title_info_price}>
                <small>1.255 ETH</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DaysComponents;
