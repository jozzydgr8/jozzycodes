import { useEffect } from 'react';
import { FlatButton } from '../../shared/FlatButton';
import { CountdownTimer } from '../../shared/CountDown';
import { NavLink, useLocation } from 'react-router-dom';
import { getBasePath } from '../../shared/getBasePath';
export const Header = ()=>{
    useEffect(()=>{
        var container = document.querySelector('.headerWrite');
        
        container?.classList.add('sectionAnimationDown');
    },[]);
    const location = useLocation();
    const basePath = getBasePath(location.pathname)

    return(
        <section id='header'>
            <div className="container-fluid">
                <div className="row">
                
                    
                    <div className="col-md-4 centerDiv">
                        <small>code, create, captivate</small><br/>
                        <h1 className='headerWrite'>
                            
                            Custom Websites Built Right From Day One.
                        </h1>
                        <span className='custom-underline'></span> <br/>
                        <p>
                            We build responsive, brand-first websites tailored to your goals.
                            Built from scratch to stand out, perform, and grow with your business.
                            <br/> <br/>
                            Want to give us a shot? 
                        </p>
                        
                        {/* <div>
                            <a href='https://wa.link/ubp14t' target='_blank'><button className='btn'>Contact Us</button></a>
                        
                        </div> */}

                        <div>
                            
                            <div style={{display:'flex', flexDirection:"row", gap:'10px', alignItems:'center'}}>
                            <a href={`${basePath}/#features`}>
                            <FlatButton title='Claim Deal' onCLick={()=>console.log('claim deal')}/>
                            </a>

                            <NavLink to={`${basePath}/pricing`}>
                            <FlatButton title='View Pricing' onCLick={()=>{console.log('view price')}} className='btnoutline'/>

                            </NavLink>
                            
                            
                            </div>
                            <CountdownTimer/>
                        </div>
                        <br/> <br/> 
                       
                    </div>
                    <div className="col-md-8 header-grid">
                        <div className='headerImageDiv'>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}