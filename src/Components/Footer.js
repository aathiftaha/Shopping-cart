import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Footer = () => {
  return (
    <div>
        <div className="footer_section layout_padding">
         <div className="container">
            <div className="footer_logo"><a href="index.html"><img src="images/footer-logo.png" alt='Footer_Logo'/></a></div>
            
            <div className='myInfo'>Developed & Designed by : MOHAMMED SHARIQUE</div>

            <div className="myContacts"><FaMailBulk /> Mail : <a href="/">mdshariquek16@gmail.com</a></div>

            <div className="myContacts"><BiSolidPhoneCall /> Contact : <a href="/">+91 9080 534 237</a></div>
         </div>
      </div>
    </div>
  )
}

export default Footer;
