import React from "react";
import "./Why.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";
export const Why = () => {
  return (
    <div>
      <div className="whyus bg-light pb-5">
        <div className="container">
          <div className="row text-center text-success pt-3">
            <h5>Why</h5>
          </div>
          <div className="row text-center">
            <h2>WHY US</h2>
            <div className="border bottom-border border-success mx-auto"></div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="why text-center mt-3">
              <FontAwesomeIcon className="fs-1 text-success" icon={faUser}/>
                <i className="fa-regular fa-user text-success fs-1"></i>
                <p>
                  We have a customer-centric approach to solve all the
                  investment-related queries
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="graph text-center mt-3">
              <FontAwesomeIcon className="fs-1 text-success" icon={faChartSimple}/>
                <i className="fa-solid fa-chart-simple text-success fs-1"></i>
                <p>
                  13+ Years of experience in technical and fundamental research
                  with more than 2000 hours of research.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="stock text-center mt-3">
              <FontAwesomeIcon className="text-success fs-1" icon={faBrain}/>
                <i className="fa-solid fa-brain text-success fs-1"></i>
                <p>
                  In-depth analysis of trading charts for the generation of
                  stock market signals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
