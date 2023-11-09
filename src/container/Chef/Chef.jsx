import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.Achef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Customers' words" />
      <h1 className="headtext__cormorant">What Customers believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">The quality and craftsmanship of your gold pieces are unmatched.</p>
        </div>
        <p className="p__opensans"> Your exceptional service and outstanding selection have won my full admiration. I'm completely satisfied with my purchase and appreciate the knowledgeable staff. You've gained a loyal customer, and I'll be spreading the word. </p>
      </div>

    </div>
  </div>
);

export default Chef;