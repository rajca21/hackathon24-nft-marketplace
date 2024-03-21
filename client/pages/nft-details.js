import React from 'react';

import { Brand, Button, Category } from '../components/components_index';
import NFTDetailsPage from '../pageComponents/nftdetails/NFTDetailsPage';

const details = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default details;
