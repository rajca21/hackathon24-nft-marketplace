import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdVerified } from 'react-icons/md';

import Style from './DaysComponent.module.css';
import images from '../../../img';

const DaysComponents = ({ el, index }) => {
  const [nfts, setNfts] = useState([]);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getNFTs = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/v1/nfts?nftCollection=${el?._id}`,
          {
            method: 'GET',
          }
        );
        const nftsRes = await res.json();
        if (nftsRes.data) {
          setNfts(nftsRes.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getCreator = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/users`, {
        method: 'GET',
      });
      const userRes = await res.json();
      const lengthOfRes = userRes.length;
      const rndIntNum = Math.floor(Math.random() * lengthOfRes);
      setUserData(userRes[rndIntNum]);
    };

    getNFTs();
    getCreator();
  }, []);

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
              src={
                nfts[0]?.imageCover ||
                'https://lh3.googleusercontent.com/ZtRqMiC-nCXFrYh3auyzGPJF5LVkqhXQDkY-z5L_xCF7vr_bxzEgFIv7LqJ6xgcW0G7L0E7DZT_Lsbx7boHvw8YqPZvtZ67zI2Z4v0g'
              }
              alt='profile'
              width={200}
              height={300}
              objectFit='cover'
              className={Style.daysComponent_box_img_1}
            />
            <Image
              src={
                nfts[1]?.imageCover ||
                'https://lh3.googleusercontent.com/ZtRqMiC-nCXFrYh3auyzGPJF5LVkqhXQDkY-z5L_xCF7vr_bxzEgFIv7LqJ6xgcW0G7L0E7DZT_Lsbx7boHvw8YqPZvtZ67zI2Z4v0g'
              }
              alt='profile'
              width={200}
              height={300}
              objectFit='cover'
              className={Style.daysComponent_box_img_2}
            />
            <Image
              src={
                nfts[2]?.imageCover ||
                'https://lh3.googleusercontent.com/ZtRqMiC-nCXFrYh3auyzGPJF5LVkqhXQDkY-z5L_xCF7vr_bxzEgFIv7LqJ6xgcW0G7L0E7DZT_Lsbx7boHvw8YqPZvtZ67zI2Z4v0g'
              }
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
                  src={
                    userData?.photo ||
                    'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png'
                  }
                  alt='user profile'
                  width={30}
                  height={30}
                  objectFit='cover'
                  className={Style.daysComponent_box_title_info_profile_img}
                />
                <p>
                  Creator
                  <span>
                    {userData?.name}{' '}
                    <small>
                      <MdVerified />
                    </small>
                  </span>
                </p>
              </div>

              {/* <div className={Style.daysComponent_box_title_info_price}>
                <small>1.255 ETH</small>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DaysComponents;
