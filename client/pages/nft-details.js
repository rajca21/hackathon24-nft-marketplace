import React, { useContext, useEffect, useState } from 'react';
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

  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);

  return (
    <div>
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand />
    </div>
  );
};

export default details;
