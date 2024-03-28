import React, { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
 
import Style from './Navbar.module.css';
import images from '../../img';
import { NFTMarketplaceContext } from '../../context/NFTMarketplaceContext';
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import { Button, Error } from '../components_index';
 
const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSidemenu, setOpenSidemenu] = useState(false);
 
  const { currentAccount, connectWallet, openError } = useContext(
    NFTMarketplaceContext
  );
  const isAuth = Boolean(useSelector((state) => state.token));
  const user = useSelector((state) => state.user);
  const router = useRouter();
 
  // Function to close all submenus
  const closeSubmenus = () => {
    setDiscover(false);
    setHelp(false);
    setNotification(false);
    setProfile(false);
  };
 
  // Listen for route changes and close submenus
  useEffect(() => {
    const handleRouteChange = () => {
      closeSubmenus();
    };
 
    router.events.on('routeChangeStart', handleRouteChange);
 
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);
 
  // Functions for opening menus (sub-components)
  const toggleDiscover = () => {
    closeSubmenus();
    setDiscover(!discover);
  };
 
  const toggleHelp = () => {
    closeSubmenus();
    setHelp(!help);
  };
 
  const openNotification = () => {
    closeSubmenus();
    setNotification(!notification);
  };
 
  const openProfile = () => {
    closeSubmenus();
    setProfile(!profile);
  };
 
  const openSidebar = () => {
    setOpenSidemenu(!openSidemenu);
  };
 
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* Left navbar section START */}
        <div className={Style.navbar_container_left}>
          <div
            className={Style.logo_container}
            onClick={() => {
              closeSubmenus();
              setOpenSidemenu(false);
              router.push('/');
            }}
          >
            <Image
              src={images.logo}
              alt='GlamChain Logo'
              width={40}
              height={40}
            />
            <p className={Style.logo_title}>GlamChain</p>
          </div>
          {isAuth && (
            <div className={Style.navbar_container_left_box_input}>
              <div className={Style.navbar_container_left_box_input_box}>
                <input type='text' />
                <BsSearch onClick={() => {}} className={Style.search_icon} />
              </div>
            </div>
          )}
        </div>
        {/* Left navbar section END */}
 
        {/* Right navbar section START */}
        <div className={Style.navbar_container_right}>
          {/* Discover section START */}
          <div className={Style.navbar_container_right_discover}>
            {isAuth && <p onClick={toggleDiscover}>Discover</p>}
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                {isAuth && <Discover />}
              </div>
            )}
          </div>
          {/* Discover section END */}
 
          {/* Help Center section START */}
          <div className={Style.navbar_container_right_help}>
            {isAuth && <p onClick={toggleHelp}>Help</p>}
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                {isAuth && <HelpCenter closeSubmenus={closeSubmenus} />}
              </div>
            )}
          </div>
          {/* Help Center section END */}
 
          {/* Notifications section START */}
          {isAuth && (
            <div className={Style.navbar_container_right_notify}>
              <MdNotifications
                className={Style.notify}
                onClick={openNotification}
              />
              {notification && <Notification />}
            </div>
          )}
 
          {/* Notifications section END */}
 
          {/* Create button section START */}
          {isAuth && (
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
          )}
 
          {/* Create button section END */}
 
          {/* User profile section START */}
          {isAuth && (
            <div className={Style.navbar_container_right_profile_box}>
              <div className={Style.navbar_container_right_profile}>
                <Image
                  src={
                    user?.photo ||
                    'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png'
                  }
                  alt='Proifle'
                  width={40}
                  height={40}
                  onClick={openProfile}
                  className={Style.navbar_container_right_profile}
                />
 
                {profile && <Profile currentAccount={currentAccount} />}
              </div>
            </div>
          )}
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
          <Sidebar
            setOpenSidemenu={setOpenSidemenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}
      {/* Sidebar END */}
 
      {openError && <Error />}
    </div>
  );
};
 
export default Navbar;