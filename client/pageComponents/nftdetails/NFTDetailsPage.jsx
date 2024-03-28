import React, { useEffect, useState } from 'react';

import Style from './NFTDetailsPage.module.css';
import { NFTDescription, NFTDetailsImg } from './nftdetailsindex';

const NFTDetailsPage = ({ nftID }) => {
  const [nft, setNft] = useState({});

  useEffect(() => {
    const getNFT = async () => {
      const res = await fetch(
        `http://localhost:8000/api/v1/nfts?tokenID=${nftID}`,
        {
          method: 'GET',
        }
      );
      const nftsRes = await res.json();
      if (nftsRes.data) {
        console.log(nftsRes.data[0]);
        setNft(nftsRes.data[0]);
      }
    };

    getNFT();
  }, [nftID]);

  return (
    <div className={Style.NFTDetailsPage}>
      {nft && (
        <div className={Style.NFTDetailsPage_box}>
          <NFTDetailsImg nft={nft} />
          <NFTDescription nft={nft} />
        </div>
      )}
    </div>
  );
};

export default NFTDetailsPage;
