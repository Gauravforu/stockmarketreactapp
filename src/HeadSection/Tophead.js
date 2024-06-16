import React from 'react'
import "./Tophead.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from  '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone }  from  '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faSkype, faSquareTwitter, faTwitter, faTwitterSquare, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
export const Tophead = () => {
  return (
    <div>
    <div className="tophead">
    <div className='container'>
        <div className='row tophead1'>
            <div className='col-lg-10 col-md-12 mx-auto'>
                <div className='row textsection'>
                    <div className='col-lg-2'>
                     <div className='headlogo '>
                     <a className='mx-1 text-success'><FontAwesomeIcon className='fa-xs' icon={faFacebook}/></a>
                     <a className='mx-1 text-success'><FontAwesomeIcon className='fa-xs' icon={faTwitter}/></a>
                     <a className='mx-1 text-success'><FontAwesomeIcon className='fa-xs' icon={faInstagram}/></a>
                     <a className='mx-1 text-success'><FontAwesomeIcon className='fa-xs' icon={faYoutube}/></a>
                     <a className='mx-1 text-success'><FontAwesomeIcon className='fa-xs' icon={faLinkedin}/></a>
                     <a className='mx-1 text-success'><FontAwesomeIcon className='fa-xs' icon={faWhatsapp}/></a>
                     <a className='text-success'><FontAwesomeIcon className='fa-xs' icon={faSkype}/></a>
                     </div>
                    </div>
                    <div className='col-lg-8'>
                     <div className='headdetail'>
                    <a ><FontAwesomeIcon className='text-success' icon={faPhone}/> +918668253350</a>
                    <a><FontAwesomeIcon className='text-success' icon={faWhatsapp}/> 8668253350</a>
                    <a><FontAwesomeIcon className='text-success' icon={faEnvelope}/> gaurav1997.pandey@gmail.com</a>
                     </div>
                    </div>
                    <div className='col-lg-2 '>
                     <div className='headbutton'>
                      <ul>
                        <li className='list-unstyled mx-1'>
                            <a href='#' className='log '>Login</a>
                            <li className='mx-1'><a className='sign'>SignUp</a></li>
                        </li>
                      </ul>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>  
    </div>
  )
}
