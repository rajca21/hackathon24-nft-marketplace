import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';

import Style from './NFTCards.module.css';

const NFTCards = ({ NFTData, ratingFilter, priceFilter }) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const getAllNfts = async () => {
      const res = await fetch('http://localhost:8000/api/v1/nfts', {
        method: 'GET',
      });
      const nftsRes = await res.json();
      setNfts(nftsRes.data);
    };

    getAllNfts();
  }, []);

  useEffect(() => {
    const getAllNfts = async () => {
      const res = await fetch('http://localhost:8000/api/v1/nfts', {
        method: 'GET',
      });
      const nftsRes = await res.json();
      setNfts(nftsRes.data);
    };

    const getRatedNFTs = async () => {
      const res = await fetch(
        'http://localhost:8000/api/v1/nfts?rating[gte]=4',
        {
          method: 'GET',
        }
      );
      const nftsRes = await res.json();
      setNfts(nftsRes.data);
    };

    if (ratingFilter) {
      getRatedNFTs();
    } else {
      getAllNfts();
    }
  }, [ratingFilter]);

  useEffect(() => {
    const getAllNfts = async () => {
      const res = await fetch('http://localhost:8000/api/v1/nfts', {
        method: 'GET',
      });
      const nftsRes = await res.json();
      setNfts(nftsRes.data);
    };

    const getCheapNFTs = async () => {
      const res = await fetch(
        'http://localhost:8000/api/v1/nfts?price[lte]=10',
        {
          method: 'GET',
        }
      );
      const nftsRes = await res.json();
      setNfts(nftsRes.data);
    };

    if (priceFilter) {
      getCheapNFTs();
    } else {
      getAllNfts();
    }
  }, [priceFilter]);

  return (
    <div className={Style.NFTCard}>
      {nfts &&
        nfts.map((el, index) => (
          <>
            {NFTData.find((item) => item.tokenId === el.tokenID) && (
              <Link
                href={{
                  pathname: '/nft-details',
                  query: NFTData.find((item) => item.tokenId === el.tokenID),
                }}
                key={index + 1}
              >
                <div className={Style.NFTCard_box}>
                  <div className={Style.NFTCard_box_img}>
                    <Image
                      src={el.imageCover}
                      alt={el.name}
                      width={600}
                      height={600}
                      className={Style.NFTCard_box_img_img}
                    />
                  </div>

                  <div className={Style.NFTCard_box_update}>
                    <div className={Style.NFTCard_box_update_left}>
                      <div className={Style.NFTCard_box_update_left_like}>
                        <AiFillHeart
                          className={Style.NFTCard_box_update_left_like_icon}
                        />
                        {el.rating}
                      </div>
                    </div>
                  </div>

                  <div className={Style.NFTCard_box_update_details}>
                    <div className={Style.NFTCard_box_update_details_price}>
                      <div
                        className={Style.NFTCard_box_update_details_price_box}
                      >
                        <h4>
                          {el.name} 
                        </h4>

                        <div
                          className={
                            Style.NFTCard_box_update_details_price_box_box
                          }
                        >
                          <div
                            className={
                              Style.NFTCard_box_update_details_price_box_bid
                            }
                          >
                            <small>Current Price</small>
                            <p>{el.price} ETH</p>
                          </div>
                          <div
                            className={
                              Style.NFTCard_box_update_details_price_box_stock
                            }
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className={Style.NFTCard_box_update_details_category}>
                      <BsImages />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </>
        ))}
    </div>
  );
};

export default NFTCards;
