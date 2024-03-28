import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Style from '../styles/search.module.css';
import images from '../img';
import {
  Brand,
  Filter,
  Loader,
  NFTCards,
} from '../components/components_index';
import { Banner } from '../pageComponents/collection/collectionIndex';
import { SearchBar } from '../pageComponents/search/searchindex';
import { NFTMarketplaceContext } from '../context/NFTMarketplaceContext';

const search = () => {
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [emptySearch, setEmptySearch] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(false);
  const [priceFilter, setPriceFilter] = useState(false);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const isAuth = Boolean(useSelector((state) => state.token));
  const router = useRouter();

  const onHandleSearch = (value) => {
    const filteredNFTs = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTs.length === 0) {
      setNfts(nftsCopy);
      setEmptySearch(true);
    } else {
      setNfts(filteredNFTs);
      setEmptySearch(false);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
    setEmptySearch(false);
  };

  useEffect(() => {
    fetchNFTs().then((item) => {
      setNfts(item?.reverse());
      setNftsCopy(item);
    });
  }, []);

  useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  return (
    <div>
      {isAuth && (
        <>
          <Banner bannerImage={images.bg} />
          <SearchBar
            onHandleSearch={onHandleSearch}
            onClearSearch={onClearSearch}
          />
          <Filter
            setRatingFilter={setRatingFilter}
            setPriceFilter={setPriceFilter}
          />
          {emptySearch && (
            <div className={Style.emptySearch_box}>
              <h2 className={Style.emptySearch_box_text}>
                No matches for your search! Check out all of our NFTs:
              </h2>
            </div>
          )}
          {nfts?.length === 0 ? (
            <Loader message='Fetching NFTs, this might take a few moments, please wait!' />
          ) : (
            <NFTCards
              ratingFilter={ratingFilter}
              priceFilter={priceFilter}
              NFTData={nfts}
            />
          )}
          <Brand />
        </>
      )}
    </div>
  );
};

export default search;
