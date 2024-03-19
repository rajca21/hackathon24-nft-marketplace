import React from 'react';
import Image from 'next/image';
import { BsCircleFill } from 'react-icons/bs';

import Style from './Category.module.css';
import images from '../../img';
import { Title } from '../components_index';

const Category = () => {
  const categoryArray = [
    {
      images: images.creatorbackground1,
      name: 'Dance Monkey',
    },
    {
      images: images.creatorbackground2,
      name: 'Sports',
    },
    {
      images: images.creatorbackground3,
      name: 'Entirtment Art',
    },
    {
      images: images.creatorbackground4,
      name: 'Time Life',
    },
    {
      images: images.creatorbackground5,
      name: 'Animals Art',
    },
    {
      images: images.creatorbackground6,
      name: 'Music',
    },
    {
      images: images.creatorbackground7,
      name: 'Digital Arts',
    },
    {
      images: images.creatorbackground8,
      name: 'Hubby',
    },
    {
      images: images.creatorbackground8,
      name: 'Bad Arts',
    },
    {
      images: images.creatorbackground9,
      name: ' Arts',
    },
    {
      images: images.creatorbackground10,
      name: 'My Fav',
    },
  ];

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
                src={el.images}
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
                  <h4>{el.name}</h4>
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
