import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Style from './NFTTabs.module.css';

const NFTTabs = ({ nft }) => {
  const [dataTab, setDataTab] = useState([]);

  useEffect(() => {
    const getBids = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/bids`, {
        method: 'GET',
      });

      const bidsRes = await res.json();
      setDataTab(bidsRes.data);
    };

    getBids();
  }, [nft]);

  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, index) => (
        <>
          {el.item == nft._id && (
            <div className={Style.NFTTabs_box} key={index + 1}>
              <Image
                src={
                  'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png'
                }
                alt='profile image'
                width={40}
                height={40}
                className={Style.NFTTabs_box_img}
              />
              <div className={Style.NFTTabs_box_info}>
                <span>
                  Offer ${el.amount} by <span>{el.bidder}</span>
                </span>

                <small>{new Date(el.createdAt).toLocaleDateString()}</small>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default NFTTabs;
