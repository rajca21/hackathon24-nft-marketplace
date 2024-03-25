import React, { useState } from 'react';
import Link from 'next/link';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from 'react-icons/ti';

import Style from './Sidebar.module.css';
import Button from '../../Button/Button';

const Sidebar = ({ setOpenSidemenu, currentAccount, connectWallet }) => {
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

  const openDiscoverMenu = () => {
    setOpenDiscover(!openDiscover);
  };

  const openHelpMenu = () => {
    setOpenHelp(!openHelp);
  };

  return (
    <div className={Style.sideBar}>
      <div className={Style.sideBar_box}>
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
        {currentAccount == '' ? (
          <Button
            btnName='Connect Wallet'
            handleClick={() => connectWallet()}
          />
        ) : (
          <Button
            btnName='Create'
            handleClick={() => router.push('/uploadnft')}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
