import React from 'react';
import Image from 'next/image';

import Style from '../styles/about-us.module.css';
import { Brand } from '../components/components_index';
import images from '../img';

const aboutUs = () => {
  const founderArray = [
    {
      name: 'AJ',
      position: 'Co-founder and Chief Executive',
      images: images.user1,
    },
    {
      name: 'EZ',
      position: 'Co-founder and Chief Executive',
      images: images.user1,
    },
    {
      name: 'MJ',
      position: 'Co-founder, Chairman',
      images: images.user1,
    },
    {
      name: 'NR',
      position: 'Co-Founder, Chief Strategy Officer',
      images: images.user1,
    },
  ];

  const factsArray = [
    {
      title: '10 million',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: '100,000',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: '200+',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus deleniti repellendus, architecto ratione quaerat
              voluptates suscipit fugiat possimus reprehenderit sapiente,
              doloremque quasi eos praesentium! Iusto tempore ipsum facilis
              consequuntur architecto?
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founders</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            deleniti repellendus, architecto ratione quaerat voluptates suscipit
            fugiat possimus reprehenderit sapiente, doloremque quasi eos
            praesentium! Iusto tempore ipsum facilis consequuntur architecto?
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div key={i} className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Facts</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            deleniti repellendus, architecto ratione quaerat voluptates suscipit
            fugiat possimus reprehenderit sapiente, doloremque quasi eos
            praesentium! Iusto tempore ipsum facilis consequuntur architecto?
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div key={i} className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutUs;
