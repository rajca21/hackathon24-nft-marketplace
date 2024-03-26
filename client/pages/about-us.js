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
      images: images.founder_aj,
      paragraph:
        'With a background in fashion design and a keen interest in blockchain technology, AJ envisioned GlamChain24 as a revolutionary platform that would merge the worlds of fashion and NFTs. Their vision drives our team to create an innovative marketplace that empowers designers, collectors, and enthusiasts alike.',
    },
    {
      name: 'EZ',
      position: 'Co-founder and Chief Executive',
      images: images.founder_ez,
      paragraph:
        'As a seasoned software developer and blockchain enthusiast, EZ plays a pivotal role in shaping the technological foundation of GlamChain24. Their expertise ensures that our platform is secure, efficient, and user-friendly, providing our users with a seamless experience.',
    },
    {
      name: 'MJ',
      position: 'Co-founder, Chairman',
      images: images.founder_mj,
      paragraph:
        'With a background in fashion marketing and a passion for creativity, MJ leads our design and branding efforts. Their unique vision and aesthetic sense help us create a visually stunning and engaging platform that resonates with our audience.',
    },
    {
      name: 'NR',
      position: 'Co-Founder, Chief Strategy Officer',
      images: images.founder_nr,
      paragraph:
        'With a background in business management and a focus on customer experience, NR oversees the day-to-day operations of GlamChain24. Their dedication to excellence ensures that our platform runs smoothly and efficiently, meeting the needs of our users.',
    },
  ];

  const factsArray = [
    {
      title: '10 million',
      info: 'Deployed unique, beautiful fashion NFTs.',
    },
    {
      title: '100,000',
      info: 'Satisfied users all around the world.',
    },
    {
      title: '200+',
      info: 'World known companies support us and work with us.',
    },
  ];

  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              Welcome to GlamChain, where innovation meets haute couture in the
              digital realm.
              <br></br>
              At GlamChain, we're redefining the fashion industry by introducing
              a revolutionary concept: NFT fashion. As pioneers in this space,
              we've created a platform that merges the timeless elegance of
              fashion with the cutting-edge technology of non-fungible tokens
              (NFTs).
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Message from Founders</h2>
          <p>
            Our mission is simple: to empower fashion enthusiasts, designers,
            and collectors alike by providing a unique and immersive marketplace
            for buying, selling, and trading digital fashion assets.
            <br></br>
            What sets us apart is our commitment to authenticity, creativity,
            and inclusivity. We collaborate with emerging and established
            designers from around the globe to curate a diverse collection of
            NFT fashion pieces that cater to every style and taste.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_title}>
            <h2>💥 Our Team</h2>
            <p>
              GlamChain24 was founded by a passionate team of individuals who
              share a deep love for fashion, technology, and blockchain. Our
              diverse team brings together a wealth of experience and expertise
              from various fields, including fashion design, software
              development, and blockchain technology.
            </p>
          </div>
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
                <small>{el.paragraph}</small>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Begin your Journey</h2>
          <p>
            Whether you're a trendsetter looking to acquire the latest digital
            fashion statement, an aspiring designer eager to showcase your
            talent, or a collector seeking rare and exclusive pieces, GlamChain
            is your ultimate destination.
            <br></br>
            Join us on this journey as we revolutionize the fashion industry one
            pixel at a time. Discover the future of fashion with GlamChain
            today.
            <br></br>
            Welcome to the intersection of fashion and technology. Welcome to
            GlamChain!
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
