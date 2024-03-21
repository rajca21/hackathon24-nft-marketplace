import React from 'react';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';

import Style from '../styles/contact-us.module.css';
import formStyle from '../pageComponents/account/Form/Form.module.css';
import { Button } from '../components/components_index';

const contactUs = () => {
  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>Contact Us</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_box_left}>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🗺 ADDRESS</h3>
              <p>ANS Headquraters</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>💌 EMAIL</h3>
              <p>glamchain@mail.com</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>☎ PHONE</h3>
              <p>000-123-456-7890</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🌏 SOCIALS</h3>
              <a href='#'>
                <TiSocialFacebook />
              </a>
              <a href='#'>
                <TiSocialLinkedin />
              </a>
              <a href='#'>
                <TiSocialInstagram />
              </a>
              <a href='#'>
                <TiSocialYoutube />
              </a>
              <a href='#'>
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={Style.contactus_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor='name'>Full Name</label>
                <input
                  type='text'
                  className={formStyle.Form_box_input_userName}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor='email'>Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type='text' />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor='description'>Message</label>
                <textarea name='' id='' cols='30' rows='6'></textarea>
              </div>
              <Button
                btnName='Send Message'
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
