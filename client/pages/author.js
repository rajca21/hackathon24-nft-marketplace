import React, { useState, useEffect } from 'react';

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

const author = () => {
  const [collectables, setCollectables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  const collectionArray = [
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
  ];

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

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTabs
        setCollectables={setCollectables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectables={collectables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={collectionArray}
        myNFTS={collectionArray}
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
