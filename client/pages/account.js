import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

import Style from '../styles/account.module.css';
import images from '../img';
import { Form } from '../pageComponents/account/accountindex';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const account = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [image, setImage] = useState(null);

  const { uploadToPinata } = useContext(NFTMarketplaceContext);
  const isAuth = Boolean(useSelector((state) => state.token));
  const user = useSelector((state) => state.user);
  const router = useRouter();

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToPinata(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }

    setImage(user?.photo);
  }, [isAuth]);

  return (
    <div className={Style.account}>
      {isAuth && (
        <>
          <div className={Style.account_info}>
            <h1>Profile settings</h1>
            <p>Set your preffered account settings.</p>
          </div>

          <div className={Style.account_box}>
            <div className={Style.account_box_img} {...getRootProps()}>
              <input {...getInputProps()} />
              <Image
                src={
                  image
                    ? image
                    : 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png'
                }
                alt='account upload'
                width={150}
                height={150}
                className={Style.account_box_img_img}
              />
              <p className={Style.account_box_img_para}>Change Image</p>
            </div>
            <div className={Style.account_box_form}>
              <Form userData={user} image={image} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default account;
