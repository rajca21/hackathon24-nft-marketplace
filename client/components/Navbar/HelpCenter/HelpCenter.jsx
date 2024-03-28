import React from 'react';
import { useRouter } from 'next/router';

import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  const router = useRouter();

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
          <div onClick={() => router.push(`/${el.link}`)}>{el.name}</div>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
