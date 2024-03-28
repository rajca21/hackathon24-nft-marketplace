import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaStar,
  FaDollarSign,
} from 'react-icons/fa';

import Style from './Filter.module.css';
import { Title } from '../components_index';

const Filter = ({ setRatingFilter, setPriceFilter }) => {
  const [filter, setFilter] = useState(true);
  const [rating, setRating] = useState(true);
  const [price, setPrice] = useState(true);

  const openFilter = () => {
    setFilter(!filter);
  };
  const openRating = () => {
    setRating(!rating);
    if (rating) {
      setRatingFilter(true);
    } else {
      setRatingFilter(false);
    }
  };
  const openPrice = () => {
    setPrice(!price);
    if (price) {
      setPriceFilter(true);
    } else {
      setPriceFilter(false);
    }
  };

  return (
    <>
      <Title
        heading='Featured NFTs'
        paragraph='Discover outstanding Fashion NFTs.'
      />
      <div className={Style.filter}>
        <div className={Style.filter_box}>
          <div className={Style.filter_box_left}></div>

          <div className={Style.filter_box_right}>
            <div className={Style.filter_box_right_box} onClick={openFilter}>
              <FaFilter />
              <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>

        {filter && (
          <div className={Style.filter_box_items}>
            <div className={Style.filter_box_items_box}>
              <div
                className={Style.filter_box_items_box_item_trans}
                onClick={openRating}
              >
                <FaStar />
                <span>{'Rating > 4'}</span>
                {rating ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>

            <div className={Style.filter_box_items_box}>
              <div
                className={Style.filter_box_items_box_item_trans}
                onClick={openPrice}
              >
                <FaDollarSign />
                <span>{'Rating < 10 ETH'}</span>
                {price ? <AiFillCloseCircle /> : <TiTick />}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
