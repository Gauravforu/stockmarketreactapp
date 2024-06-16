import React from 'react'
import "./About.css"
import Pic4 from "../Picture/research.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
export const About = (props) => {
  return (
    
    <>
        <div className={props.cName} >
      <div className="container ">
        <div class="row ">
          <div className="col-md-6">
            <img src={Pic4} alt="research" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h5 className="text-success">Who We Are</h5>
            <h4>About Us</h4>
            <div
              className="border bottom-border border-success"
            
            ></div>
            <p>
              Green Corner Advisory is the symbol of trust, prosperity and
              courage. We enable scalable growth by leveraging stock market
              intelligence and analytics, exercising judicious investment with
              risk appetite, operating effectively to deliver business outcome.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <div class="text-center mission">
                <FontAwesomeIcon className='text-success fs-1' icon={faChartLine} />
                  <i className="fa-solid fa-chart-line text-success fs-1"></i>
                  <h5>Mission</h5>
                  <p>
                    To become the most preferred and most trusted, globally
                    recognized stock market advisors.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-center mission">
                <FontAwesomeIcon className='text-success fs-1' icon={faChartLine}/>
                  <i className="fa-solid fa-chart-line text-success fs-1"></i>
                  <h5>Mission</h5>
                  <p>
                    To become the most preferred and most trusted, globally
                    recognized stock market advisors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}
