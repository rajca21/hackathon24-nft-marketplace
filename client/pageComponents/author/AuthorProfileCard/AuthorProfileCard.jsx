import React, { useState } from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from 'react-icons/ti';

import Style from './AuthorProfileCard.module.css';
import { useSelector } from 'react-redux';

const AuthorProfileCard = ({ currentAccount }) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const user = useSelector((state) => state.user);

  const copyAddress = () => {
    const copyText = document.getElementById('myInput');
    const textValue = copyText.value;
    navigator.clipboard.writeText(copyText.value);
    copyText.value = 'Copied!';
    setTimeout(() => (copyText.value = textValue), 2000);
  };

  const openShare = () => {
    setShare(!share);
    setReport(false);
  };
  const openReport = () => {
    setReport(!report);
    setShare(false);
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={
              user.photo ||
              'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png'
            }
            className={Style.AuthorProfileCard_box_img_img}
            alt='NFT'
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            {user.name}{' '}
            <span>
              <MdVerified />
            </span>{' '}
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input
              type='text'
              value={currentAccount}
              id='myInput'
              onChange={() => {}}
            />
            <FiCopy
              onClick={copyAddress}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>

          <p>{user.website}</p>
          <div className={Style.AuthorProfileCard_box_info_social}>
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
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.AuthorProfileCard_box_share}></div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
