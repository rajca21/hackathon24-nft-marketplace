import React, { useState, useEffect } from 'react';
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from 'react-icons/bs';

import Style from './Collection.module.css';
import images from '../../img';
import { Title } from '../components_index';
import DaysComponent from './DaysComponent/DaysComponents';

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const cardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const newsArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];

  const openPopular = () => {
    setPopular(!popular);
    setFollowing(false);
    setNews(false);
  };
  const openFollower = () => {
    setFollowing(!following);
    setPopular(false);
    setNews(false);
  };
  const openNews = () => {
    setNews(!news);
    setPopular(false);
    setFollowing(false);
  };

  return (
    <>
      <Title
        heading='New Collections'
        paragraph='Explore most popular Fashion NFT Collections'
      />

      <div className={Style.collection}>
        <div className={Style.collection_title}>
          <div className={Style.collection_collections}>
            <div className={Style.collection_collections_btn}>
              <button onClick={openPopular}>
                <BsFillAlarmFill /> 24 hours
              </button>
              <button onClick={openFollower}>
                <BsCalendar3 /> 7 days
              </button>
              <button onClick={openNews}>
                <BsFillCalendarDateFill /> 30 days
              </button>
            </div>
          </div>
        </div>
        {popular && (
          <div className={Style.collection_box}>
            {cardArray.map((el, index) => (
              <DaysComponent key={index + 1} index={index} el={el} />
            ))}
          </div>
        )}

        {following && (
          <div className={Style.collection_box}>
            {followingArray.map((el, index) => (
              <DaysComponent key={index + 1} index={index} el={el} />
            ))}
          </div>
        )}

        {news && (
          <div className={Style.collection_box}>
            {newsArray.map((el, index) => (
              <DaysComponent key={index + 1} index={index} el={el} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Collection;
