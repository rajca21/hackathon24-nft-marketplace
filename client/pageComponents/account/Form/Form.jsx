import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';

import Style from './Form.module.css';
import { NFTMarketplaceContext } from '../../../context/NFTMarketplaceContext';
import { Button } from '../../../components/components_index';

const Form = ({ userData, image }) => {
  const [name, setName] = useState(userData?.name || '');
  const [desc, setDesc] = useState(userData?.description || '');
  const [website, setWebsite] = useState(userData?.website || '');
  const [fb, setFb] = useState(userData?.facebook || '');
  const [tw, setTw] = useState(userData?.twitter || '');
  const [ig, setIg] = useState(userData?.instagram || '');

  const { currentAccount } = useContext(NFTMarketplaceContext);
  const router = useRouter();

  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:8000/api/v1/users/${userData._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          description: desc,
          website: website,
          facebook: fb,
          twitter: tw,
          instagram: ig,
          photo: image,
          wallet: currentAccount,
        }),
      });

      router.push('/account');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {userData._id && (
        <div className={Style.Form}>
          <div className={Style.Form_box}>
            <form>
              <div className={Style.Form_box_input}>
                <label htmlFor='name'>Username</label>
                <input
                  type='text'
                  className={Style.Form_box_input_userName}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={Style.Form_box_input}>
                <label htmlFor='email'>Email</label>
                <div className={Style.Form_box_input_box}>
                  <div className={Style.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type='text' disabled value={userData?.email} />
                </div>
              </div>

              <div className={Style.Form_box_input}>
                <label htmlFor='description'>Description</label>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='6'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>

              <div className={Style.Form_box_input}>
                <label htmlFor='website'>Website</label>
                <div className={Style.Form_box_input_box}>
                  <div className={Style.Form_box_input_box_icon}>
                    <MdOutlineHttp />
                  </div>
                  <input
                    type='text'
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
              </div>

              <div className={Style.Form_box_input_social}>
                <div className={Style.Form_box_input}>
                  <label htmlFor='facebook'>Facebook</label>
                  <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                      <TiSocialFacebook />
                    </div>
                    <input
                      type='text'
                      value={fb}
                      onChange={(e) => setFb(e.target.value)}
                    />
                  </div>
                </div>
                <div className={Style.Form_box_input}>
                  <label htmlFor='Twitter'>Twitter</label>
                  <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                      <TiSocialTwitter />
                    </div>
                    <input
                      type='text'
                      value={tw}
                      onChange={(e) => setTw(e.target.value)}
                    />
                  </div>
                </div>
                <div className={Style.Form_box_input}>
                  <label htmlFor='Instragram'>Instragram</label>
                  <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                      <TiSocialInstagram />
                    </div>
                    <input
                      type='text'
                      value={ig}
                      onChange={(e) => setIg(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className={Style.Form_box_input}>
                <label htmlFor='wallet'>Wallet</label>
                <div className={Style.Form_box_input_box}>
                  <div className={Style.Form_box_input_box_icon}>
                    <MdOutlineHttp />
                  </div>
                  <input type='text' disabled value={currentAccount} />
                  <div className={Style.Form_box_input_box_icon}>
                    <MdOutlineContentCopy />
                  </div>
                </div>
              </div>

              <div className={Style.Form_box_btn}>
                <p className={Style.button} onClick={() => handleUpdate()}>
                  Upload Profile
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
