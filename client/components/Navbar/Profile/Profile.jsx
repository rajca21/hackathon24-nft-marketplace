import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownload } from 'react-icons/tb';

import Style from './Profile.module.css';
import images from '../../../img';
import { setLogout } from '../../../state';

const Profile = ({ currentAccount }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.user1}
          alt='user'
          width={50}
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
          <p>{user.name}</p>
          <small>{user.email}</small>
          <br></br>
          <small>{currentAccount.slice(0, 15)}...</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: '/author' }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: '/author' }}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: '/account' }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: '/contact-us' }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              <Link href={{ pathname: '/' }}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
