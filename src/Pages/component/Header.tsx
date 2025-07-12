import { useEffect } from 'react';
import { FlatButton } from '../../shared/FlatButton';
import { CountdownTimer } from '../../shared/CountDown';
import { useLocation } from 'react-router-dom';
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
                            Your Trusted Partner for Stunning,<br/> User-Friendly Websites
                        </h1>
                        <span className='custom-underline'></span> <br/>
                        <p>
                            We build user-friendly, responsive, and
                            professional websites tailored to your business needs,
                            ensuring your online presence stands out and delivers exceptional results to your audience.
                            <br/> <br/>
                            Want to give us a shot? 
                        </p>
                        
                        {/* <div>
                            <a href='https://wa.link/ubp14t' target='_blank'><button className='btn'>Contact Us</button></a>
                        
                        </div> */}

                        <div>
                            <a href={`${basePath}/#features`}><FlatButton title='Claim Deal' onCLick={()=>console.log('claim deal')}/>
                            </a>
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