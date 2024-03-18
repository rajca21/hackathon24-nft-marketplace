import React, { useState, useEffect } from 'react';
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from 'react-icons/bs';

import Style from './Collection.module.css';
import { Title } from '../components_index';
import DaysComponent from './DaysComponent/DaysComponents';

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4];
  const newsArray = [1, 2, 3, 4, 5, 6];

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
