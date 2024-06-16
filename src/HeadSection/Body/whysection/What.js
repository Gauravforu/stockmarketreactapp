import React from 'react'
import "./What.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faChartSimple, faDollarSign, faFile, faIndianRupeeSign, faMoneyBill, faSquarePollHorizontal, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
export const What = () => {
  return (
    <div>
         <div className="what bg-light py-4">
      <div className="container">
        <div className="row text-center">
          <h6>Offer</h6>
        </div>
        <div className="row text-center">
          <h2>WHAT WE OFFER</h2>
          <div
            className="border bottom-border border-success mx-auto"
            
          ></div>
        </div>
        <div className="row py-4">
          <div className="col-lg-4">
            <div className="equity text-center">
            <FontAwesomeIcon className='text-success fs-1' icon={faMoneyBill}/>
              <i className="fa-solid fa-money-bill text-success fs-1"></i>
              <h5>EQUITY</h5>
              <p>
                Equity here refers to cash and derivative stocks and indices
                which are traded on national exchanges of India. Investment in
                equity market is preffered by both traders and investors.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="commodity text-center">
            <FontAwesomeIcon className='text-success fs-1' icon={faSquarePollVertical}/>
              <i className="fa-solid fa-square-poll-vertical text-success fs-1"></i>
              <h5>MCX COMMODITY</h5>
              <p>
                MCX refers to Multi Commodity Exchange in which Bullions (Gold &
                Silver), Base Metals (Aluminium, Copper, Lead, Nickel & Zinc)
                and Energy (Crude Oil & Natural Gas) is traded.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="management text-center">
            <FontAwesomeIcon className='text-success fs-1' icon={faFile} />
              <i className="fa-solid fa-file text-success fs-1"></i>
              <h5>PMS</h5>
              <p>
                PMS here refers to Profile Management Service which is an
                exclusive product designed for the customers who are busy in
                their day to day activities and require core investment
                assistance on time to time basis.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="management text-center">
            <FontAwesomeIcon className='text-success fs-1' icon={faChartSimple} />
              <i className="fa-solid fa-chart-simple text-success fs-1"></i>
              <h5>NCDEX</h5>
              <p>
                NCDEX refers to National Commodity and Derivatives Exchange in
                which agricultural commodity derivatives such as Chana,
                Soyabean, Refined Soya Oil, Dhaniya, Jeera etc is traded.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="management text-center">
            <FontAwesomeIcon className='text-success fs-1' icon={faDollarSign} />
              <i className="fa-solid fa-dollar-sign text-success fs-1"></i>
              <h5>FOREX</h5>
              <p>
                FOREX here refers to Foreign Exchange which basically is a
                product designed for traders who trade global CFD's of major
                currencies such as EURUSD, GBPUSD, USDJPY, AUDUSD, USDCAD,
                NZDUSD & USDCHF and commodities such as Gold, Silver & Crude
                Oil.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="management text-center">
            <FontAwesomeIcon className='text-success fs-1' icon={faIndianRupeeSign} />
              <i className="fa-solid fa-indian-rupee-sign text-success fs-1"></i>
              <h5>CURRENCY</h5>
              <p>
                Currency here refers to the currency derivatives of USDINR,
                EURINR, GBPINR, JPYINR, EURUSD, GBPUSD, USDJPY which is traded
                and hedged in national stock exchanges of India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
