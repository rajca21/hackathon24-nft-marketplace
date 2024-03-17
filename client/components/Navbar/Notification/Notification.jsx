import React from 'react';
import Image from 'next/image';

import Style from './Notification.module.css';
import images from '../../../img';

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notifications</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt='profile'
            width={50}
            height={50}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>User Name</h4>
          <p>Some notification....</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
