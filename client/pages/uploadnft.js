import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Style from '../styles/upload-nft.module.css';
import { UploadNFT } from '../pageComponents/uploadnft/uploadnftindex';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const uploadNFT = () => {
  const { uploadToPinata, createNFT } = useContext(NFTMarketplaceContext);
  const isAuth = Boolean(useSelector((state) => state.token));
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  return (
    <div className={Style.uploadNFT}>
      {isAuth && (
        <div className={Style.uploadNFT_box}>
          <div className={Style.uploadNFT_box_heading}>
            <h1>Create New NFT</h1>
            <p>
              You can set preferred display name, create your profile URL and
              manage other personal settings.
            </p>
          </div>

          <div className={Style.uploadNFT_box_title}>
            <h2>Image, Video, Audio, or 3D Model</h2>
            <p>
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </p>
          </div>

          <div className={Style.uploadNFT_box_form}>
            <UploadNFT uploadToPinata={uploadToPinata} createNFT={createNFT} />
          </div>
        </div>
      )}
    </div>
  );
};

export default uploadNFT;
