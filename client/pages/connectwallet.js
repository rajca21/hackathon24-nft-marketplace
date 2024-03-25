import React, { useState } from 'react';
import Image from 'next/image';

import Style from '../styles/connect-wallet.module.css';
import images from '../img';

const connectwallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const providerArray = [
    {
      provider: images.provider1,
      name: 'Metamask',
    },
    {
      provider: images.provider2,
      name: 'walletConnect',
    },
    {
      provider: images.provider3,
      name: 'walletlink',
    },
    {
      provider: images.provider1,
      name: 'Formatic',
    },
  ];

  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your Wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of our wallet providers
        </p>

        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, index) => (
            <div
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn == index + 1 ? Style.active : ''
              }`}
              key={index + 1}
              onClick={() => setActiveBtn(index + 1)}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connectwallet;