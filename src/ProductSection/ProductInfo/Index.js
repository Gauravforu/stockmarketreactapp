import React, { useState } from 'react'
import {Modal, ModalBody, ModalHeader} from "reactstrap"
export const Index = () => {
  const [modal,setmodal]= useState(false);
    const [modal1,setmodal1]=useState(false);
    const [modal2, setmodal2]=useState(false);
    const [modal3, setmodal3]=useState(false);
  return (
    <div className="equtyinfo">
        <div className="container">
        <div className="row">
         
        <div className="col-lg-2">
            <div className="equitybtn">
              <button className="btn btn-success  py-2 mt-2 ">
                EQUITY CASH
              </button>
             
            </div>
          </div>
          
          <div className="col-lg-10">
          <div className="row equityinfo-wraper py-3 ">
          <div className="col-lg-6 py-3">
                <div className="equityprice py-4">
                  <p className="text-center">NORMAL</p>
                  <div className="mx-auto">
                  <Modal size="lg"
                   isOpen={modal}
                   toggle={()=>setmodal(!modal)}

                  >
                  <ModalHeader
                  className="text-center"
                  toggle={()=>setmodal(!modal)}
                  >
                  Equity Cash - Normal - 1 MONTH
                  </ModalHeader>
                  <ModalBody>
                    <h5>Features</h5>
                    <p>Get 1 Intraday tip daily</p>
                    <p>And approx 3% to 4% returns</p>

                    <h5>You may exhaust your subscription for the two following reasons:</h5>
                    <p>1. Duration may be completed i.e., 1 month</p>
                    <p>2. You might have earned profit of ₹ 60,000</p>

                    <p>In either of the cases above you will need to renew your subscription.</p>

                    <h5>For more details you can contact with your agent.</h5>
                  </ModalBody>

                  </Modal>

                  
                  <button className="btn py-1 mt-3 check mx-auto" onClick={()=>setmodal(true)}>
                    1 Month-$9,999
                  </button>
                  </div>
                  <div className="mx-auto">
                    
                  <Modal size="lg"
                   isOpen={modal1}
                   toggle={()=>setmodal1(!modal1)}

                  >
                  <ModalHeader
                  className="text-center"
                  toggle={()=>setmodal1(!modal1)}
                  >
                  Equity Cash - Normal - 3 MONTH
                  </ModalHeader>
                  <ModalBody>
                    <h5>Features</h5>
                    <p>Get 1 Intraday tip daily</p>
                    <p>And approx 3% to 4% returns</p>

                    <h5>You may exhaust your subscription for the two following reasons:</h5>
                    <p>1. Duration may be completed i.e., 3 month</p>
                    <p>2. You might have earned profit of ₹ 1,50,000</p>

                    <p>In either of the cases above you will need to renew your subscription.</p>

                    <h5>For more details you can contact with your agent.</h5>
                  </ModalBody>

                  </Modal> 
                  <button className="btn py-1 mt-3 check mx-auto" onClick={()=>setmodal1(true)}>
                    3 Month-$24,999
                  </button>
                  </div>
                  <div className="mx-auto">

                  <Modal size="lg"
                   isOpen={modal2}
                   toggle={()=>setmodal2(!modal2)}

                  >
                  <ModalHeader
                  className="text-center"
                  toggle={()=>setmodal2(!modal2)}
                  >
                  Equity Cash - Normal - 6 MONTH
                  </ModalHeader>
                  <ModalBody>
                    <h5>Features</h5>
                    <p>Get 1 Intraday tip daily</p>
                    <p>And approx 3% to 4% returns</p>

                    <h5>You may exhaust your subscription for the two following reasons:</h5>
                    <p>1. Duration may be completed i.e., 6 month</p>
                    <p>2. You might have earned profit of ₹ 2,35,000</p>

                    <p>In either of the cases above you will need to renew your subscription.</p>

                    <h5>For more details you can contact with your agent.</h5>
                  </ModalBody>

                  </Modal>
                  <button className="btn py-1 mt-3 check mx-auto" onClick={()=>setmodal2(true)}>
                    6 Month-$39,999
                  </button>
                  </div>
                  <div className="mx-auto">
                  <Modal size="lg"
                   isOpen={modal3}
                   toggle={()=>setmodal3(!modal3)}

                  >
                  <ModalHeader
                  className="text-center"
                  toggle={()=>setmodal3(!modal3)}
                  >
                  Equity Cash - Normal - 12 MONTH
                  </ModalHeader>
                  <ModalBody>
                    <h5>Features</h5>
                    <p>Get 1 Intraday tip daily</p>
                    <p>And approx 3% to 4% returns</p>

                    <h5>You may exhaust your subscription for the two following reasons:</h5>
                    <p>1. Duration may be completed i.e., 12 month</p>
                    <p>2. You might have earned profit of ₹ 3,50,000</p>

                    <p>In either of the cases above you will need to renew your subscription.</p>

                    <h5>For more details you can contact with your agent.</h5>
                  </ModalBody>

                  </Modal>
                  <button className="btn py-1 mt-3 check mx-auto" onClick={()=>setmodal3(true)}>
                    12 Month-$59,999
                  </button>
                  </div>
                  <p className="mx-auto mt-3">*Above plans are excluding GST</p>
                  <button className="btn py-1 mt-3 check mx-auto bg-success">Buy Now</button>
                </div>
              </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}
