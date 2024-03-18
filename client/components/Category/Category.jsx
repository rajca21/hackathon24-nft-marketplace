import React from 'react';
import Image from 'next/image';
import { BsCircleFill } from 'react-icons/bs';

import Style from './Category.module.css';
import images from '../../img';
import { Title } from '../components_index';

const Category = () => {
  const categoryArray = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Title
        heading='Browse by Category'
        paragraph='Expore Fashion NFTs through these featured categories.'
      />
      <div className={Style.box_category}>
        <div className={Style.category}>
          {categoryArray.map((el, index) => (
            <div key={index + 1} className={Style.category_box}>
              <Image
                src={images.creatorbackground1}
                className={Style.category_box_img}
                alt='category'
                width={350}
                height={150}
                objectFit='cover'
              />
              <div className={Style.category_box_title}>
                <span>
                  <BsCircleFill />
                </span>
                <div className={Style.category_box_title_info}>
                  <h4>High-Fashion</h4>
                  <small>1995 NFTs</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
