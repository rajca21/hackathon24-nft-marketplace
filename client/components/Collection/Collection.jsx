import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Style from './Collection.module.css';
import images from '../../img';
import { Title } from '../components_index';
import DaysComponent from './DaysComponent/DaysComponents';

const Collection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const getCollections = async () => {
      const res = await fetch('http://localhost:8000/api/v1/collections', {
        method: 'GET',
      });
      const collectionsRes = await res.json();
      setCollections(collectionsRes.data);
      console.log(collectionsRes.data);
    };

    getCollections();
  }, []);

  return (
    <>
      <Title
        heading='New Collections'
        paragraph='Explore most popular Fashion NFT Collections'
      />

      <div className={Style.collection}>
        {collections && (
          <div className={Style.collection_box}>
            {collections.map((el, index) => (
              <DaysComponent key={index + 1} index={index} el={el} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Collection;
