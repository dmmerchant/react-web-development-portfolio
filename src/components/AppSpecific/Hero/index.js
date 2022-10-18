import React from 'react';

import imgProfile from '../../../assets/media/devonmerchant.jpg'
import './Hero.css';

export default function AboutMe() {
  return (
    <div className='hero'>
      <img src={imgProfile} alt="Devon Merchant" />
      <figcaption>Let me work harder, so you can work smarter!</figcaption>
    </div>
  );
}
