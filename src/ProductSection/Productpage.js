import React, { useState } from 'react'
import { Tophead } from '../HeadSection/Tophead'
import { Navbar } from '../Navbar/Navbar'
import Propic from "./ProductPics/propic.jpg"
import "./Productpage.css"
import { Equity } from './ProductInfo/Equity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faChartSimple, faMoneyBill, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { Mcx } from './Mcx'
import { Index } from './ProductInfo/Index'
import { Delivery } from './ProductInfo/Delivery'
import { Work } from '../HeadSection/Body/Worksection/Work'
import { TrustSlider } from '../Slider/TrustSlider'
import { Contact } from '../AboutSection/ContactSection/Contact'
import { Risk } from '../FooterSection/Risk'
import { Footer } from '../FooterSection/Footer'

export const Productpage = () => {
  const [page,setpage]= useState(0);

   const change =()=>{
    setpage(1);
   }
    const change2 =()=>{
      setpage(2);
    }
    const change3=()=>{
      setpage(3)
    }
    const change4=()=>{
      setpage(4)
    }
  return (
    <div className='mainproductpage'>
     <Tophead/>
     <Navbar/>
     <div className='productpic'>
        <img src={Propic} alt='Propic'/>
     </div>
     <div className='secondaryproductpage '>
     <div className='container'>
        <div className='row text-center '>
            <h2>PRODUCTS</h2>
            <div className='border botom-border border-success mx-auto'>
            </div>
            </div>
        </div>
     </div>
     <div className='product-wraper '>
     <div className='thirdproductpage'>
      <div className='container '>
        <div className='row'>
        
          <div className='col-lg-3 text-center'>
          
           <button className='btn btn-1'  type='button' onClick={change}>
           <FontAwesomeIcon icon={faMoneyBill}/> <span> EQUITY </span>
           </button>
           
          </div>
          <div className='col-lg-3  text-center'>
          <button className='btn btn-1'  type='button' onClick={change2}>
          <FontAwesomeIcon icon={faBoxOpen}/> <span> MCX </span>
            </button>
            
          </div>
          <div className='col-lg-3 text-center'>
          <button className='btn btn-1'  type='button' onClick={change3}>
          <FontAwesomeIcon icon={faChartSimple}/> <span>INDEX</span>
            </button>
            
          </div>
          <div className='col-lg-3 text-center'>
          <button className='btn btn-1'  type='button' onClick={change4}>
          <FontAwesomeIcon icon={faTruckFast}/><span> DELIVERER </span>
            </button>
            
          </div>
          </div>
          
      </div>
      </div>
     <div className='productinformationpage py-5'>
      
        <div className='row'>
          <div className='col-lg-12'>
            {page===1 ?(<Equity/>)
            :page===2 ? (<Mcx/>):
            page===3 ? (<Index/>):
            page===4 ? (<Delivery/>):
            (<Index/>)
            }
          </div>
        </div>
      
     </div>
     </div>
     <Work cName="work1"/>
     <TrustSlider cName="mainslider2" />
     <Contact cName="mainclass3" />
     <Risk cName="mainrisk3"/>
     <Footer cName="mainfooter3" />
    </div>
  )
}
