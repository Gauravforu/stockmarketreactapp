import React from "react";
import Image from "./Pics/testimonials1a.jpg";
import "./TrustSlider.css";
export const TrustSlider = (props) =>  {
  return (
    <div className={props.cName}>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h6 className="text-center text-success">Clients</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg text-center">
            <h2>THEY TRUSTED US</h2>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-10 mx-auto">
            <div className="slidersection">
              <div className="upimage image-fluid ">
                <img
                  src={Image}
                  className="image-fluid rounded-circle top-0 start-50 translate-middle shadow p-1 "
                  alt=""
                />
              </div>
              <p>
                "I have been associated with Green Corner Advisory for the last
                2 months, joined the service of HNI Equity. As a trader I am
                fully satisfied with the services, support & amp; research these
                guys are providing. Expecting the same kind of support in the
                future."
              </p>
                <h5 className="text-success" >PRASHANT</h5>
                <h6 className="text-success">NEW DELHI</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
