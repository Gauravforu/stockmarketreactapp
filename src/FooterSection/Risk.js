import React from "react";
import "./Risk.css"
export const Risk = (props) =>  {
  return (
    <div className={props.cName}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="risktext py-4">
              <p>
                Green Corner Advisory is the symbol of trust, prosperity and
                courage. We enable scalable growth by leveraging stock market
                intelligence and analytics, exercising judicious investment with
                risk appetite, operating effectively to deliver business
                outcome. We also believe that the people entering into stock
                market are aware of the risk and returns involved with
                investment in stock market. And with our time and tested
                financial models to generate high quality signals we ensure that
                the investment made by the clients grow by the leaps and bounds
                for their prosperity. This makes us complete stock market
                advisors.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="risklow">
              <h5>CAPITAL @ RISK</h5>
              <p>
                With investment, your capital is at risk. Investing/Trading is
                subject to market risk. Please read all the documents before
                investing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
