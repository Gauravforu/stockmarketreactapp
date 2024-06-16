import React from "react"
import "./Footer.css"
export const Footer = (props) =>  {
  return (
    <div className={props.cName}>
     <div className='container'>
        <div className='row'>
            <div className='col-lg-3'>
            <div className='footerimg'>
                <img/>
            </div>
              <p>Green Corner Advisory is the symbol of trust, prosperity and courage.</p>
              <h6>Follow us on</h6>
            </div>
            <div className='col-lg-3'>
                <h6>Useful Links</h6>
                <div className='links1'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Research</li>
                    <li>Services</li>
                    <li>Disclaimer</li>
                    <li>Privacy policy</li>
                </ul>
                </div>
            </div>
            <div className='col-lg-3'>
               <h6>Our Services</h6>
               <div className='links1'>
                <ul>
                  <li>Equity Cash</li> 
                  <li>Stock Options</li>
                  <li>Bank Nifty</li>
                  <li>Stock Future</li>
                  <li>Commodity</li>
                  <li>Delivery</li>   
                </ul>
               </div> 
            </div>
            <div className='col-lg-3'>
                <h6>Contact</h6>
            </div> 
        </div>
     </div>
    </div>
  )
}
