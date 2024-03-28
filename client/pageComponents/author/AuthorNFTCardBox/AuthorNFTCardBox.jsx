import React, { useState } from 'react';

//INTERNAL IMPORT
import Style from './AuthorNFTCardBox.module.css';
import { NFTCards } from '../../../components/components_index';

const AuthorNFTCardBox = ({
  listed,
  owned,
  created,
  nfts,
  myNFTS,
  allNFTs,
}) => {
  return (
    <div className={Style.AuthorNFTCardBox}>
      {listed && <NFTCards NFTData={nfts} />}
      {owned && <NFTCards NFTData={myNFTS} />}
      {created && <NFTCards NFTData={[allNFTs]} created={true} />}
    </div>
  );
};

export default AuthorNFTCardBox;
