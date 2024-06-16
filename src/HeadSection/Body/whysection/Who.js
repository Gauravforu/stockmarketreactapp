import React from 'react'
import "./Who.css"
import Pic6 from "../Pic/graph.jpg"
export const Who = () => {
  return (
    <div>
        <div className="whois py-4">
      <div className="container">
        <div className="row text-center text-success">
          <h6>Who Is</h6>
        </div>
        <div className="row text-center" >
          <h2>WHO IS THIS FOR</h2>
          <div
            className="border bottom-border border-success mx-auto"
            
          ></div>
        </div>
        <div className="row">
          <div className="col-lg-4 pt-4">
            <div className="stockimg">
              <img src={Pic6} alt="graph" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-8 pt-4">
            <div className="whotext pt-4">
              <ul>
                <li>Clients seeking low risk on their investment made.</li>
                <li>
                  Clients who are not able to manage their funds on their own.
                </li>
                <li>
                  Clients who require short and long term investment products.
                </li>
                <li>
                  Clients expecting good returns on their investments in less
                  time span.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
