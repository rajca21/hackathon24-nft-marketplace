import React, { useState } from 'react';
import Image from 'next/image';
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
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

const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provenance, setProvenance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [images.user1, images.user2, images.user3, images.user4];
  const provenanceArray = [
    images.user5,
    images.user6,
    images.user7,
    images.user8,
  ];
  const ownerArray = [images.user1, images.user9, images.user3, images.user10];

  const openSocial = () => {
    setSocial(!social);
    setNFTMenu(false);
  };

  const openNFTMenu = () => {
    setNFTMenu(!NFTMenu);
    setSocial(false);
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText == 'Bid History') {
      setHistory(true);
      setProvenance(false);
      setOwner(false);
    } else if (btnText == 'Provenance') {
      setHistory(false);
      setProvenance(true);
      setOwner(false);
    }
  };

  const openOwner = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvenance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        <div className={Style.NFTDescription_box_share}>
          <p>Metaverses</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={openSocial}
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href='#'>
                  <TiSocialFacebook /> Facebooke
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

            <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={openNFTMenu}
            />

            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href='#'>
                  <BiDollar /> Change price
                </a>
                <a href='#'>
                  <BiTransferAlt /> Transfer
                </a>
                <a href='#'>
                  <MdReportProblem /> Report problem
                </a>
                <a href='#'>
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>

        <div className={Style.NFTDescription_box_profile}>
          <h1>TokenX #12456</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt='profile'
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>
                  User Name <MdVerified />
                </span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.creatorbackground1}
                alt='profile'
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small> <br />
                <span>
                  Coll app <MdVerified />
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
                6.124 ETH <span>( ≈ $3,221.22)</span>
              </p>
            </div>

            <span>[96 in stock]</span>
          </div>

          <div className={Style.NFTDescription_box_profile_biding_box_button}>
            <Button
              icon={<FaWallet />}
              btnName='Place a Bid'
              handleClick={() => {}}
              classStyle={Style.button}
            />
            <Button
              icon={<FaPercentage />}
              btnName='Make an Offer'
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div>

          <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
            <button onClick={(e) => openTabs(e)}>Bid History</button>
            <button onClick={(e) => openTabs(e)}>Provenance</button>
            <button onClick={() => openOwner()}>Owner</button>
          </div>

          {history && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={historyArray} />
            </div>
          )}
          {provenance && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={provenanceArray} />
            </div>
          )}

          {owner && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
