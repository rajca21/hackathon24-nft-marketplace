import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';

import Style from './Form.module.css';
import { Button } from '../../../components/components_index';

const Form = () => {
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          <div className={Style.Form_box_input}>
            <label htmlFor='name'>Username</label>
            <input type='text' className={Style.Form_box_input_userName} />
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor='email'>Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type='text' />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor='description'>Description</label>
            <textarea name='' id='' cols='30' rows='6'></textarea>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor='website'>Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type='text' />
            </div>
          </div>

          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor='facebook'>Facebook</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type='text' />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor='Twitter'>Twitter</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type='text' />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor='Instragram'>Instragram</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type='text' />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor='wallet'>Wallet</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type='text' />
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_btn}>
            <Button
              btnName='Upload profile'
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
