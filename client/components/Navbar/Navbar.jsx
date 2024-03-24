import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';

import Style from './Navbar.module.css';
import images from '../../img';
import { NFTMarketplaceContext } from '../../context/NFTMarketplaceContext';
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import { Button } from '../components_index';

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSidemenu, setOpenSidemenu] = useState(false);

  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
  const router = useRouter();

  // functions for opening menus (sub-components)
  const toggleDiscover = () => {
    setDiscover(!discover);
    setHelp(false);
    setNotification(false);
    setProfile(false);
  };

  const toggleHelp = () => {
    setHelp(!help);
    setDiscover(false);
    setNotification(false);
    setProfile(false);
  };

  const openNotification = () => {
    setNotification(!notification);
    setDiscover(false);
    setHelp(false);
    setProfile(false);
  };
  const openProfile = () => {
    setProfile(!profile);
    setDiscover(false);
    setHelp(false);
    setNotification(false);
  };
  const openSidebar = () => {
    setOpenSidemenu(!openSidemenu);
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* Left navbar section START */}
        <div className={Style.navbar_container_left}>
          <Link href='/'>
            <div className={Style.logo_container}>
              <Image
                src={images.logo}
                alt='GlamChain Logo'
                width={40}
                height={40}
              />
              <p className={Style.logo_title}>GlamChain</p>
            </div>
          </Link>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* Left navbar section END */}

        {/* Right navbar section START */}
        <div className={Style.navbar_container_right}>
          {/* Discover section START */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={toggleDiscover}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* Discover section END */}

          {/* Help Center section START */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={toggleHelp}>Help</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* Help Center section END */}

          {/* Notifications section START */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={openNotification}
            />
            {notification && <Notification />}
          </div>
          {/* Notifications section END */}

          {/* Create button section START */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount == '' ? (
              <Button btnName='Connect' handleClick={() => connectWallet()} />
            ) : (
              <Button
                btnName='Create'
                handleClick={() => router.push('/uploadnft')}
              />
            )}
          </div>
          {/* Create button section END */}

          {/* User profile section START */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt='Proifle'
                width={40}
                height={40}
                onClick={openProfile}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>
          {/* User profile section END */}

          {/* Sidebar menu button START */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={openSidebar} />
          </div>
          {/* Sidebar menu button END */}
        </div>
        {/* Right navbar section END */}
      </div>

      {/* Sidebar START */}
      {openSidemenu && (
        <div className={Style.Sidebar}>
          <Sidebar setOpenSidemenu={setOpenSidemenu} />
        </div>
      )}
      {/* Sidebar END */}
    </div>
  );
};

export default Navbar;
