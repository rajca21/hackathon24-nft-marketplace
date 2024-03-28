import React from 'react';
import Link from 'next/link';

import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  const helpCenter = [
    {
      name: 'About Us',
      link: 'about-us',
    },
    {
      name: 'Contact Us',
      link: 'contact-us',
    },
  ];

  return (
    <div>
      {helpCenter.map((el, index) => (
        <div key={index + 1} className={Style.helpCenter}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
