import React from 'react';
import Navbar from '../Shared/Navbar';
import banner from '../../assets/AboutUs.jpg';
import './About.css'; 
import Footer from './Footer';

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-us-section">
        <div className="banner-container">
          <img src={banner} alt="banner" className="banner-image" />
          <div className="about-hms-box">
            <p className="about-hms-title">About HMS</p>
          </div>
        </div>
      </div>

      <div className="background-section">
        <div className="content-container">
          <p className="background-title">Background</p>
          <p className="background-text">
            HMS is a quaternary care hospital network offering end-to-end healthcare services, right from primary to quaternary care in India and Middle-east. HMS Hospital is owned and managed by M/s HMS Health Care Management Limited, a public limited company incorporated under the Companies Act, 1956 with an objective to provide world-class affordable healthcare services the Company commenced its operations in the year 1999. Currently, the Company is in the business of delivering quality healthcare services through a wide network of multi-specialty hospitals, which provide healthcare to its guests.
          </p>
          <p className="background-text hidden-lg">
            In addition to this, the Blood Center is also accredited by NABH and the laboratory is NABL (National Accreditation Board for Testing and Calibration of Laboratories) accredited.
            Today, HMS stands among the top 10 hospitals in India with top-notch healthcare delivery systems, evidence-based medicine, high-end facilities, and quality-oriented practices. The Group started in the year 2002 with its flagship quaternary-care hospital at Trivandrum. From there, HMS is now one of the largest healthcare networks, growing from a 250-bed to a 2000-bed healthcare group, with hospitals in major cities like Trivandrum, Kollam, Kottayam and Perinthalmanna; in addition to its hospitals in Bahrain, Oman, Saudi Arabia, Qatar and UAE. The group’s newest addition, KIMSHEALTH East is an outstanding healthcare facility with the most modern Operation Theatres, ICUs of international standards and a Transplant Program for the Kidney, Liver and Pancreas. In addition, it will be a centre of excellence for wellness, High-risk obstetrics, advanced Perinatology and Neonatology
            Thus, HMS touches upon all aspects of wellness and healthcare, with a fine fusion of cardinal principles of holistic care and hospitality with the three-pronged approach of courtesy, compassion, and competence
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;