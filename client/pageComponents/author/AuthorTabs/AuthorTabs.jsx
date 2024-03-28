import React, { useState } from 'react';

import Style from './AuthorTabs.module.css';

const AuthorTabs = ({ setListed, setOwned, setCreated }) => {
  const [activeBtn, setActiveBtn] = useState(1);

  const openTab = (e) => {
    const btnText = e.target.innerText;
    if (btnText == 'Listed') {
      setListed(true);
      setOwned(false);
      setCreated(false);
      setActiveBtn(1);
    } else if (btnText == 'Owned') {
      setListed(false);
      setOwned(true);
      setCreated(false);
      setActiveBtn(2);
    } else if (btnText == 'Created') {
      setListed(false);
      setOwned(false);
      setCreated(true);
      setActiveBtn(3);
    }
  };

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? Style.active : ''}`}
              onClick={(e) => openTab(e)}
            >
              Listed
            </button>
            <button
              className={`${activeBtn == 2 ? Style.active : ''}`}
              onClick={(e) => openTab(e)}
            >
              Owned
            </button>
            <button
              className={`${activeBtn == 2 ? Style.active : ''}`}
              onClick={(e) => openTab(e)}
            >
              Created
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorTabs;
