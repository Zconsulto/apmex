import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about goldBar">
        <h1 className="headtext__cormorant">About Us</h1>
        <div />
        <p className="p__opensans">With a legacy forged through decades of passion for excellence, APMEX stands as a beacon of craftsmanship in the world of fine gold. Our journey began with a simple yet powerful vision: to offer unparalleled quality and beauty in every piece that graces your collection. We honor the ancient art of goldsmithing, merging it with modern design to create timeless pieces that tell a story of elegance and grandeur.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.GBar} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history goldBar">
        <h1 className="headtext__cormorant">Our History</h1>
        <div />
        <p className="p__opensans">Tracing back to the artisans of yore, APMEX's history is steeped in a tradition that celebrates the purest forms of gold. Every ingot and ornament is a testament to our unyielding dedication to artistry. From the mines to the market, we ensure integrity and trust are as ingrained in our business as the carats in our gold. Join us on a journey through time, where each shimmer holds an age-old secret waiting to be unveiled.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;