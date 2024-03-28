import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdVerified, MdCloudUpload, MdTimer } from 'react-icons/md';
import { FaWallet, FaPercentage } from 'react-icons/fa';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from 'react-icons/ti';
import { BiTransferAlt, BiDollar } from 'react-icons/bi';

import Style from './NFTDescription.module.css';
import images from '../../../img';
import { Button } from '../../../components/components_index';
import { NFTTabs } from '../nftdetailsindex';
import { NFTMarketplaceContext } from '../../../context/NFTMarketplaceContext';

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [creatorData, setCreatorData] = useState({});
  const [collectionData, setCollectionData] = useState({});

  const { buyNft, currentAccount } = useContext(NFTMarketplaceContext);
  const router = useRouter();

  const historyArray = [images.user1, images.user2, images.user3, images.user4];

  // Submenus functions
  const openSocial = () => {
    setSocial(!social);
  };

  useEffect(() => {
    const fetchCreatorAndCollection = async () => {
      const res = await fetch(
        `http://localhost:8000/api/v1/users/${nft?.creator}`,
        {
          method: 'GET',
        }
      );
      const creatorRes = await res.json();
      setCreatorData(creatorRes[0]);

      const resCollection = await fetch(
        `http://localhost:8000/api/v1/collections/${nft?.nftCollection}`,
        {
          method: 'GET',
        }
      );
      const collectionRes = await resCollection.json();
      setCollectionData(collectionRes.data);
    };

    fetchCreatorAndCollection();
  }, [nft]);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        <div className={Style.NFTDescription_box_share}>
          <p>{collectionData?.name}</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={openSocial}
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href='#'>
                  <TiSocialFacebook /> Facebook
                </a>
                <a href='#'>
                  <TiSocialInstagram /> Instragram
                </a>
                <a href='#'>
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href='#'>
                  <TiSocialTwitter /> Twitter
                </a>
                <a href='#'>
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenID}
          </h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={creatorData?.photo}
                alt='profile'
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <Link href={{ pathname: '/author', query: `${nft.seller}` }}>
                  <span>
                    {creatorData?.name} <MdVerified />
                  </span>
                </Link>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={collectionData?.imageCover}
                alt='profile'
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small> <br />
                <span>
                  {collectionData?.name} <MdVerified />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.NFTDescription_box_profile_biding}>
          <p>
            <MdTimer /> <span>Auction ending in:</span>
          </p>
          <div className={Style.NFTDescription_box_profile_biding_box_timer}>
            <div
              className={Style.NFTDescription_box_profile_biding_box_timer_item}
            >
              <p>2</p>
              <span>Days</span>
            </div>
            <div
              className={Style.NFTDescription_box_profile_biding_box_timer_item}
            >
              <p>22</p>
              <span>hours</span>
            </div>
            <div
              className={Style.NFTDescription_box_profile_biding_box_timer_item}
            >
              <p>45</p>
              <span>mins</span>
            </div>
            <div
              className={Style.NFTDescription_box_profile_biding_box_timer_item}
            >
              <p>12</p>
              <span>secs</span>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_biding_box_price}>
            <div
              className={Style.NFTDescription_box_profile_biding_box_price_bid}
            >
              <small>Current Bid</small>
              <p>
                {nft.price} ETH <span></span>
              </p>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_biding_box_button}>
            {currentAccount == nft.seller?.toLowerCase() ? (
              <p>You are selling this masterpiece. Good for you!</p>
            ) : currentAccount == nft.owner?.toLowerCase() ? (
              <Button
                icon={<FaWallet />}
                btnName='List on Marketplace'
                handleClick={() =>
                  router.push(
                    `/resell-token?id=${nft.tokenID}&tokenURI=${nft.tokenURI}`
                  )
                }
                classStyle={Style.button}
              />
            ) : (
              <>
                <Button
                  icon={<FaWallet />}
                  btnName='Place a Bid'
                  handleClick={() => buyNft(nft)}
                  classStyle={Style.button}
                />
              </>
            )}
          </div>

          <div className={Style.NFTDescription_box_profile_biding_box_card}>
            <NFTTabs dataTab={historyArray} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
