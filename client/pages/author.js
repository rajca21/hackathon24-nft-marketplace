import React, { useState, useEffect, useContext } from 'react';

import Style from '../styles/author.module.css';
import images from '../img';
import { Banner } from '../pageComponents/collection/collectionIndex';
import { Brand, Title } from '../components/components_index';
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard';
import {
  AuthorNFTCardBox,
  AuthorProfileCard,
  AuthorTabs,
} from '../pageComponents/author/authorindex';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const author = () => {
  const [collectables, setCollectables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: '7d64gf748849j47fy488444',
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: '7d64gf748849j47fy488444',
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: '7d64gf748849j47fy488444',
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: '7d64gf748849j47fy488444',
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: '7d64gf748849j47fy488444',
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: '7d64gf748849j47fy488444',
    },
  ];

  useEffect(() => {
    fetchMyNFTsOrListedNFTs('fetchItemsListed').then((items) => {
      setNfts(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs('fetchMyNFTs').then((items) => {
      setMyNFTs(items);
    });
  }, []);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard currentAccount={currentAccount} />
      <AuthorTabs
        setCollectables={setCollectables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
        currentAccount={currentAccount}
      />
      <AuthorNFTCardBox
        collectables={collectables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNFTS={myNFTs}
      />
      <Title
        heading='Popular Creators'
        paragraph='Explore some of the most unique NFT artists'
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default author;
