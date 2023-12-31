import React from 'react';
import './footer.css';
import './beta.css'; //BETA ICON

function Footer() {
  return (
    <footer className='footerBar'>
      <div className='signature'>
        <div className='dev'>Developer Repos</div>
        <a href='https://github.com/Spero1023'>- Nicholas Spera</a>
        <a href='https://github.com/calvinxhe'>- Calvin He</a>
        <a href='https://github.com/wchan6'>- William Chan</a>
        <a href='https://github.com/mjgilfus'>- Matthew Gilfus</a>
      </div>
      {/* BETA ICON  */}
      <div className='beta'>beta</div>
      {/* BETA ICON  */}
    </footer>
  );
}
export default Footer;
