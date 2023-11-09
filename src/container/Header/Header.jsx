import React from 'react';

import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Crafted for Perfection" />

      <h1 className="app__header-h1">Treasures Worthy of Legacy</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Our heritage is golden, with a lineage of artisans who have dedicated their lives to the pursuit of perfection. Witness the golden touch in our array of products, where every item is a testament to our commitment to excellence.</p>
      <button type='button' className="custom__button">Explore menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.Awelcome} alt='gold' />
      </div>
  </div>
);

export default Header;
