import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

import Style from './UploadNFT.module.css';
import formStyle from '../../account/Form/Form.module.css';
import images from '../../../img';
import { Button } from '../../../components/components_index';
import { DropZone } from '../uploadnftindex';

const UploadNFT = ({ uploadToPinata, createNFT }) => {
  const [active, setActive] = useState(0);
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [royalties, setRoyalties] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [category, setCategory] = useState('');
  const [properties, setProperties] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [collections, setCollections] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const getCollections = async () => {
      const res = await fetch('http://localhost:8000/api/v1/collections', {
        method: 'GET',
      });
      const collectionsRes = await res.json();
      setCollections(collectionsRes.data);
      console.log(collectionsRes.data);
    };

    getCollections();
  }, []);

  return (
    <div className={Style.upload}>
      <DropZone
        title='JPG, PNG, WEBM, MAX 100MB'
        heading='Drag & Drop File'
        subHeading='or Browse media on your device'
        name={name}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        setImage={setImage}
        uploadToPinata={uploadToPinata}
      />

      <div className={Style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor='nft'>Item Name</label>
          <input
            type='text'
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor='website'>Website</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input type='text' onChange={(e) => setWebsite(e.target.value)} />
          </div>

          <p className={Style.upload_box_input_para}>
            GlamChain will include a link to this URL on this item's detail
            page, so that users can click to learn more about it. You are
            welcome to link to your own webpage with more details.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor='description'>Description</label>
          <textarea
            name=''
            id=''
            cols='30'
            rows='6'
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor='name'>Choose collection</label>
          <p className={Style.upload_box_input_para}>
            Choose an exiting collection or create a new one
          </p>

          <div className={Style.upload_box_slider_div}>
            {collections.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${
                  active == i + 1 ? Style.active : ''
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(el))}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image
                      src={el.imageCover}
                      alt='background'
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor='Royalties'>Royalties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type='text'
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor='size'>Size</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type='text'
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor='Propertie'>Properties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type='text'
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor='Price'>Price</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input type='text' onChange={(e) => setPrice(e.target.value)} />
            </div>
          </div>
        </div>

        <div className={Style.upload_box_btn}>
          <Button
            btnName='Upload'
            handleClick={async () =>
              createNFT(
                name,
                price,
                image,
                description,
                router
                // website,
                // royalties,
                // fileSize,
                // category,
                // properties
              )
            }
            classStyle={Style.upload_box_btn_style}
          />
          <Button
            btnName='Preview'
            handleClick={() => {}}
            classStyle={Style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
