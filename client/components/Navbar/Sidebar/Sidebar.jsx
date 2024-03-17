import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from 'react-icons/ti';

import Style from './Sidebar.module.css';
import images from '../../../img';
import Button from '../../Button/Button';

const Sidebar = ({ setOpenSidemenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const discover = [
    {
      name: 'Collection',
      link: 'collection',
    },
    {
      name: 'Search',
      link: 'search',
    },
    {
      name: 'Author Profile',
      link: 'author-profile',
    },
    {
      name: 'NFT Details',
      link: 'nft-details',
    },
    {
      name: 'Account Settings',
      link: 'account-settings',
    },
    {
      name: 'Connect Wallet',
      link: 'connect-wallet',
    },
    {
      name: 'Blog',
      link: 'blog',
    },
  ];
  const helpCenter = [
    {
      name: 'About',
      link: 'about',
    },
    {
      name: 'Contact Us',
      link: 'contact-us',
    },
    {
      name: 'Sign Up',
      link: 'sign-up',
    },
    {
      name: 'Sign In',
      link: 'sign-in',
    },
    {
      name: 'Subscription',
      link: 'subscription',
    },
  ];

  const closeSidebar = () => {
    setOpenSidemenu(false);
  };

  const openDiscoverMenu = () => {
    setOpenDiscover(!openDiscover);
  };

  const openHelpMenu = () => {
    setOpenHelp(!openHelp);
  };

  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn} onClick={closeSidebar} />

      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt='logo' width={150} height={150} />
        <p>Discover the most outstanding fashion NFTs</p>
        <div className={Style.sideBar_social}>
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

      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={openDiscoverMenu}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, index) => (
                <p key={index + 1}>
                  <Link href={{ pathname: el.link }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className={Style.sideBar_menu_box} onClick={openHelpMenu}>
            <p>Help Center</p>
            <TiArrowSortedDown />

            {openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((el, index) => (
                  <p key={index + 1}>
                    <Link href={{ pathname: el.link }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={Style.sideBar_button}>
        <Button btnName='Create' />
        <Button btnName='Connect Wallet' />
      </div>
    </div>
  );
};

export default Sidebar;
