import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';

import Style from './NFTCards.module.css';

const NFTCards = ({ NFTData, ratingFilter, priceFilter, created }) => {
  const [nfts, setNfts] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getAllNfts = async () => {
      const res = await fetch('http://localhost:8000/api/v1/nfts', {
        method: 'GET',
      });
      const nftsRes = await res.json();
      setNfts(nftsRes.data);
      console.log(nftsRes.data);
    };

    const getMyNFTs = async () => {
      const res = await fetch(
        `http://localhost:8000/api/v1/nfts?creator=${user._id}`,
        {
          method: 'GET',
        }
      );
      const nftsRes = await res.json();
      setNfts(nftsRes.data);
      console.log(nftsRes.data);
    };

    if (created) {
      getMyNFTs();
    } else {
      getAllNfts();
    }
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
                          {el.name.slice(0, 10)} #{el.tokenID}
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
