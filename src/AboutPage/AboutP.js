import React from "react";
import { Tophead } from "../HeadSection/Tophead";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../FooterSection/Footer";
import Pics3 from "./Pics3/Banner_About.jpg";
import "./AboutP.css";
import { About } from "../AboutSection/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { TrustSlider } from "../Slider/TrustSlider";
import { Contact } from "../AboutSection/ContactSection/Contact";
import { Risk } from "../FooterSection/Risk";

export const AboutP = () => {
  return (
    <div className="maintest">
      <Tophead />
      <Navbar />
      <div className="aboutpics">
        <img className="" src={Pics3} />
      </div>

      <About cName="about1" />

      <div className="companydetail">
        <div className="container">
          <div className="row">
            <h6 className="text-success">Detail</h6>
            <h2>COMPANY DETAILS</h2>
            <div className="border bottom-border border-success"></div>
            </div>
            <div className="row">
              <div className="col-lg-12 ">
              <div className="companytext ">
                <FontAwesomeIcon className="fs-1 text-success py-2" icon={faBuilding} />
                <p>
                  Green Corner Advisory (Investment Advisor) is a financial
                  market research and consulting company. We are a team of
                  highly qualified professionals who are working with complete
                  dedication towards the achievement of the financial goals of
                  our clients. We strive hard to make our clients satisfied with
                  our return strategy so that the financial future of them is
                  secured.
                </p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
            <TrustSlider cName="mainslider1" />
            <Contact cName="mainclass1"/>
            <Risk cName="mainrisk1"/>
      
            <Footer cName="mainfooter1" />
      
    </div>
  );
};
