import React from "react";
import "./ResearchPage.css";
import { Tophead } from "../HeadSection/Tophead";
import { Navbar } from "../Navbar/Navbar";
import Respic from "./ResearchPic/ResPic.jpg";
import Respic2 from "./ResearchPic/candle-stick.png";
import { TrustSlider } from "../Slider/TrustSlider";
import { Contact } from "../AboutSection/ContactSection/Contact";
import { Risk } from "../FooterSection/Risk";
import { Footer } from "../FooterSection/Footer";
export const ResearchPage = (props) => {
  return (
    <div className="mainresearch">
    
      <Tophead />
      <Navbar />
      <div className="respic">
        <img src={Respic} alt="Respic" />
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-9 mx-auto">
            <div className="restext ">
              <h2>RESEARCH OVERVIEW</h2>
              <div className="border bottom-border border-success mx-auto my-4"></div>
              <p className="py-4">
                Our research team uses data science fundamental and technical
                research to generate the best quality signals for all big and
                small investors globally. Stock analysis also involves EIC
                (Economy, Industry and Company) approach. Buy and sell
                recommendation of various companies are generated on a regular
                basis to serve our customers with the best possible support. We
                also provide rich research reports on timely basis to our
                customers to enhance their analytics.
              </p>
              <h2>RESEARCH FOCUS</h2>
              <div className="border bottom-border mx-auto border-success my-4"></div>
              <p className="py-4">
                Our recommendations are generated on the basis of time and
                tested technical research analysis models to generate the best
                possible signals for our customers.
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="resSecondsection">
            <div className="container">
            <div className="row">
          <div className="col-lg-4">
            <div className="respics">
              <img src={Respic2} alt="graph" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-8 ">
            <div className="restext2 pt-4">
              <p>
                Our core areas of expertise are Equities, Commodities,
                Currencies, Derivatives and International market research. Our
                views are purely based of technical analysis and are
                independent, unbiased and balanced.
              </p>
              <p>
                Our team understands that every investor has a different need
                and hence our comprehensive approach helps our customers meet
                their financial goals. Our time to time research reports helps
                our customers understand their investment decisions wisely.
              </p>
            </div>
          </div>
        </div>
            </div>
        </div>
        <div className="tradingprinciple bg-light">
            <div className="container">
                <div className="row text-center ">
                    <h2>TRADING PRINCIPLES</h2>
                    <h2>1</h2>
                    <p>Always invest with a margin of safety</p>
                    <h2>2</h2>
                    <p>Expect volatility and Profit from it</p>
                    <h2>3</h2>
                    <p>Know what kind of investor you are</p>
                    <h2>4</h2>
                    <p>Use equal risk and reward in each trade</p>
                    <h2>5</h2>
                    <p>Strictly follow stop loss levels</p>
                    <h2>6</h2>
                    <p>Strictly follow the levels provided in each signal</p>
                    <h2>7</h2>
                    <p>Keep patience while investing in stock market</p>
                </div>
            </div>
        </div>
        <TrustSlider cName="mainslider2"/>
        <Contact cName="mainclass2"/>
        <Risk cName="mainrisk2"/>
        <Footer cName="mainfooter2"/>
    </div>
  );
};
