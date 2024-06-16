import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Work.css"
import { faBox, faClock, faHeadphones, faMagnifyingGlassChart, faTimes } from '@fortawesome/free-solid-svg-icons'

export const Work = (props) => {
  return (
    <div className={props.cName}>
    <div className='container'>
        <div className='row text-center'>
         <h6 className='text-success'>Work</h6>
        </div>
        <div className='row text-center'>
            <h2>HOW IT WORKS</h2>
        </div>
        <div className='border bottom-border border-success mx-auto'>

        </div>
        <div className='row'>
            <div className='col-lg-3'>
            <div className='workclass text-center mt-4'>
                <FontAwesomeIcon className='text-success fs-1 ' icon={faClock}/>
                <p>Time and tested signal generation models</p>
                </div>
            </div>
            <div className='col-lg-3'>
             <div className='workclass text-center mt-4'>
              <FontAwesomeIcon className='text-success fs-1' icon={faHeadphones}/>
              <p>Client support and query resolution on a real time basis</p>
             </div>
            </div>
            <div className='col-lg-3'>
             <div className='workclass text-center mt-4'>
               <FontAwesomeIcon className='text-success fs-1' icon={faMagnifyingGlassChart}/>
               <p>Dedicated NISM Certified Research Team</p> 
             </div>
            </div>
            <div className='col-lg-3'>
             <div className='workclass text-center mt-4'>
                <FontAwesomeIcon className='text-success fs-1' icon={faBox}/>
                <p>Customized products as per risk profiling and return requirements of clients</p>
             </div>
            </div>
        </div>
    </div>

    </div>
  )
}
