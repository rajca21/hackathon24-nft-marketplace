import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Brand } from '../components/components_index';
import NFTDetailsPage from '../pageComponents/nftdetails/NFTDetailsPage';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const details = () => {
  const [nft, setNft] = useState({});

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
    setNft(router.query.tokenId);
  }, [router.isReady]);

  return (
    <div>
      {isAuth && (
        <>
          <NFTDetailsPage nftID={nft} />
          <Brand />
        </>
      )}
    </div>
  );
};

export default details;
