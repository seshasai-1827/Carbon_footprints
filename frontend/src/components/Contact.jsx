import React from 'react';
import './Footer.css'; // Add your custom styles
import linus from '../assets/images/linus.jpg';
import behzinga from '../assets/images/behzinga.png';
import charlie from '../assets/images/charlie.jpg';
import mewhen from '../assets/images/mewhen.jpeg';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-details-container">
  <div className="contact-details-1">
    <img src={behzinga} alt="Contact Image" />
    <p>Name: Seshasai Chillara</p>
    <p>Email: seshasaic.et23@rvce.edu.in</p>
    <p>USN: 1RV23ET040</p>
  </div>
  <div className="contact-details-1">
    <img src={linus} alt="Contact Image" />
    <p>Name: Unmesh Raj</p>
    <p>Email: unmeshraj.et23@rvce.edu.in</p>
    <p>USN: 1RV23ET055</p>
  </div>


  <div className="contact-details-1">
    <img src={charlie} alt="Contact Image" />
    <p>Name: Suryansh Tripathi</p>
    <p>Email: suryansht.et23@rvce.edu.in</p>
    <p>USN: 1RV23ET053</p>
  </div>

  <div className="contact-details-1">
    <img src={mewhen} alt="Contact Image" />
    <p>Name: Vineet Raj</p>
    <p>Email: vineetraj.et23@rvce.edu.in</p>
    <p>USN: 1RV23ET062</p>
  </div>
</div>
    </div>
  );
};

export default Contact;
