import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

import Style from './DropZone.module.css';
import images from '../../../img';

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  setImage,
  uploadToPinata,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToPinata(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image
              src={images.upload}
              alt='upload'
              width={100}
              height={100}
              objectFit='contain'
              className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <Image
              src={fileUrl}
              alt='nft'
              width={300}
              height={300}
              layout='responsive'
            />

            <div className={Style.DropZone_box_aside_box_preview}>
              {(name || website) && (
                <div className={Style.DropZone_box_aside_box_preview_one}>
                  {name && (
                    <p>
                      <samp>NFT Name:</samp>
                      {name}
                    </p>
                  )}
                  {website && (
                    <p>
                      <samp>Website:</samp>
                      {website}
                    </p>
                  )}
                </div>
              )}

              {description && (
                <div className={Style.DropZone_box_aside_box_preview_two}>
                  <p>
                    <span>Description</span>
                    {description}
                  </p>
                </div>
              )}

              {(royalties || fileSize || properties || category) && (
                <div className={Style.DropZone_box_aside_box_preview_three}>
                  {royalties && (
                    <p>
                      <span>Royalties</span>
                      {royalties}
                    </p>
                  )}

                  {fileSize && (
                    <p>
                      <span>Size</span>
                      {fileSize}
                    </p>
                  )}

                  {properties && (
                    <p>
                      <span>Properties</span>
                      {properties}
                    </p>
                  )}

                  {category && (
                    <p>
                      <span>Category</span>
                      {category}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
