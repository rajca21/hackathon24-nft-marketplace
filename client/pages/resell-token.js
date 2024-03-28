import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';

import Style from '../styles/resell-token.module.css';
import formStyle from '../pageComponents/account/Form/Form.module.css';
import { Button } from '../components/components_index';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const resellToken = () => {
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const { createSale } = useContext(NFTMarketplaceContext);
  const isAuth = Boolean(useSelector((state) => state.token));
  const router = useRouter();
  const { id, tokenURI } = router.query;

  const resell = async () => {
    try {
      await createSale(tokenURI, price, true, id);

      const res = await fetch(
        `http://localhost:8000/api/v1/nfts?tokenID=${id}`,
        {
          method: 'GET',
        }
      );

      const resNFT = await res.json();

      await fetch(`http://localhost:8000/api/v1/nfts/${resNFT?.data[0]?._id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          price: price,
        }),
      });

      router.push('/');
    } catch (error) {
      console.error('Something went wrong while reselling token: ', error);
    }
  };

  useEffect(() => {
    const fetchNFT = async () => {
      if (!tokenURI) return;
      const { data } = await axios.get(tokenURI);
      setImage(data.image);
    };

    fetchNFT();
  }, [id]);

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  return (
    <div className={Style.reSellToken}>
      {isAuth && (
        <div className={Style.reSellToken_box}>
          <h1>Resell your Token, set your own price:</h1>
          <div className={formStyle.Form_box_input}>
            <label htmlFor='name'>Price</label>
            <input
              type='number'
              min={0.0000000001}
              className={formStyle.Form_box_input_userName}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className={Style.reSellToken_box_image}>
            {image && (
              <Image src={image} alt='resell nft' width={400} height={400} />
            )}
          </div>

          <div className={Style.reSellToken_box_btn}>
            <Button btnName='Resell NFT' handleClick={resell} />
          </div>
        </div>
      )}
    </div>
  );
};

export default resellToken;
