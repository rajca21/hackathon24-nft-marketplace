import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Brand, Button, Category } from '../components/components_index';
import NFTDetailsPage from '../pageComponents/nftdetails/NFTDetailsPage';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const details = () => {
  const [nft, setNft] = useState({
    image: '',
    tokenId: '',
    name: '',
    owner: '',
    price: '',
    seller: '',
  });

  const router = useRouter();
  const { currentAccount } = useContext(NFTMarketplaceContext);
  const isAuth = Boolean(useSelector((state) => state.token));

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);

  return (
    <div>
      {isAuth && (
        <>
          <NFTDetailsPage nft={nft} />
          <Category />
          <Brand />
        </>
      )}
    </div>
  );
};

export default details;
