import React from 'react';
import Navigation from '../Navigation';
import './Header.css';

export default function Header() {
  const headerStyle = {

  }
  return (
    <div className='header'>
      <h1>Devon Merchant</h1>
      <Navigation className='nav' />
    </div>
  );
}
