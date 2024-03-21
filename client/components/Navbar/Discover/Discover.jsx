import React from 'react';
import Link from 'next/link';

import Style from './Discover.module.css';

const Discover = () => {
  const discover = [
    {
      name: 'Collection',
      link: 'collection',
    },
    {
      name: 'Search',
      link: 'search',
    },
    {
      name: 'Author Profile',
      link: 'author-profile',
    },
    {
      name: 'NFT Details',
      link: 'nft-details',
    },
    {
      name: 'Account Settings',
      link: 'account',
    },
    {
      name: 'Connect Wallet',
      link: 'connect-wallet',
    },
    {
      name: 'Blog',
      link: 'blog',
    },
  ];

  return (
    <div>
      {discover.map((el, index) => (
        <div key={index + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
