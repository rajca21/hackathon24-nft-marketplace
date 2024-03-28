import React from 'react';
import Link from 'next/link';

import Style from './Discover.module.css';

const Discover = () => {
  const discover = [
    {
      name: 'Search',
      link: 'search',
    },
    {
      name: 'Account Settings',
      link: 'account',
    },
    {
      name: 'Upload NFT',
      link: 'uploadnft',
    },
    {
      name: 'Connect Wallet',
      link: 'connectwallet',
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
