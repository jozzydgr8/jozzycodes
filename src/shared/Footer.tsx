import { NavLink, useLocation } from 'react-router-dom';
import lightIcon from '../assets/white-logo.png';
import { getBasePath } from './getBasePath';

export const Footer = ()=>{
    const location = useLocation();
    const basePath =getBasePath(location.pathname)
    return (
        <section className='footer-section'>
            <div className="container-fluid">
                <footer>
                    <div className="row">
                        <div className="col-md-3" style={{display:'flex', gap:'10px',flexDirection:'column'}} >
                        <img src={lightIcon} alt='jozzy_codes logo' className='footer-icon heading'/>
                        <div>
                            Fb./ <a href='https://www.instagram.com/jozzycodes/'>Ig./</a> Tw./ Ln. / <a href='https://wa.link/ubp14t' target='blank'>Whatsapp</a>
                       
                        </div>
                        <br/>
                        </div>
                        <div className="col-md-3 " style={{display:'flex', gap:'25px',flexDirection:'column'}}>
                            <small className='heading'>Get in touch?</small>
                            <div>
                            Talk to someone?<br/>
                            <a href='tel:08113828486'>Call Us
                                <ion-icon name="phone-portrait-outline"></ion-icon>
                            </a>
                            </div>


                            <div>
                                Send us a message on whatsApp? <br/>
                                <a href='https://wa.link/ubp14t' target='_blank'>
                                    WhatsApp<ion-icon name="logo-whatsapp"></ion-icon>
                                </a>
                            </div>


                            
                            <br/>
                        </div>

                        <div className="col-md-3" style={{display:'flex', gap:'10px',flexDirection:'column'}}>
                            <small className='heading'>Quick Links</small>
                            <a href='/#philosophy' >About Us</a> 
                            <NavLink to={`${basePath}pricing`}>Website Development</NavLink> 
                            <a href='/#services'>Our Services</a>
                            <a>Refund Policy</a>
                            <br/>

                        </div>


                        <div className="col-md-3" style={{display:'flex', gap:'10px',flexDirection:'column'}}>
                            <small className='heading'>Request a Quote</small>
                            <NavLink to={`${basePath}pricing`}>Ecommerce Pricing</NavLink> 
                            <NavLink to={`${basePath}pricing`}>Business Website Pricing</NavLink> 
                        
                            
                        </div>
                    </div>
                    <hr/>
                    <small><a href='https://jozzycodes.com' target='_blank'>All Rights Reserved © jozzy-codes digital</a> </small>
                </footer>
            </div>
        </section>
    )
}