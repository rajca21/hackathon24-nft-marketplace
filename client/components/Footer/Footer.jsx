import React from 'react';
import Image from 'next/image';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';

import Style from './Footer.module.css';
import images from '../../img';
import { Discover, HelpCenter } from '../Navbar/index';

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt='footer_logo' height={100} width={100} />
          <p>
            The world's first digital fashion products marketplace for crypto
            collectibles and non-fungible tokens. Buy, sell and discover
            exclusive digital content.
          </p>

          <div className={Style.footer_social}>
            <a href='#'>
              <TiSocialFacebook />
            </a>
            <a href='#'>
              <TiSocialLinkedin />
            </a>
            <a href='#'>
              <TiSocialTwitter />
            </a>
            <a href='#'>
              <TiSocialYoutube />
            </a>
            <a href='#'>
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <p>Enter your E-mail address:</p>
          <div className={Style.subscribe_box}>
            <input type='email' />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>Get latest updates on NFTs, Crypto, Blockchain and many more!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
