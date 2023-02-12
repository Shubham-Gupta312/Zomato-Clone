import React from 'react';
import '../footer/Footer.css';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className='footer absolute-center'>
      &copy; {year} All Rights Reserved
      <br />Made by Shubaham Gupta
    </div>
  )
}

export default Footer
