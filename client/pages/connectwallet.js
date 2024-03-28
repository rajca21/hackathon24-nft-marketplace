import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Style from '../styles/connect-wallet.module.css';
import images from '../img';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const connectwallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
  const isAuth = Boolean(useSelector((state) => state.token));
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth]);

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
  ];

  return (
    <div className={Style.connectWallet}>
      {isAuth && (
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
                onClick={() => (setActiveBtn(index + 1), connectWallet())}
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
      )}
    </div>
  );
};

export default connectwallet;
