import React from 'react';
import { useRouter } from 'next/router';

import Style from './Discover.module.css';

const Discover = () => {
  const router = useRouter();

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
          <div onClick={() => router.push(`/${el.link}`)}>{el.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Discover;
