import { useEffect } from 'react';
import curvedLine from '../../assets/curvedline.png'
import { FlatButton } from '../../shared/FlatButton';
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
        <section className='linearbackground'>
            <div className="container-fluid">
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',fontSize:"medium"}}>
                
                    
                    <div className="centerDiv">
                        <small>code, create, captivate</small><br/>
                        
                            <h1 style={{textAlign:'center'}} className='headerWrite'>
                                
                            
                            Custom Websites Built Right From Day One.
                        </h1>
                
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <img src={curvedLine} style={{width:'80%'}}/>
                        </div>
                        <span className='custom-underline'></span> <br/>
                        <p style={{textAlign:'center'}}>
                            Search no More, Let's take it from here. Jozzycodes specializes in developing custom, brand-first websites tailored to your goals.
                            {/* Built from scratch to stand out, perform, and grow with your business. */}
                            <br/> <br/>
                             Want to give us a shot?
                        </p>
                        
                        <div style={{display:"flex", justifyContent:"center"}} >
                            
                            <div className='row justify-content-center text-center'>
                            <a href='https://wa.link/ubp14t' target='_blank' rel='no-referrer' className='col-md-6' style={{marginBottom:'20px'}}>
                            <FlatButton className='btn-lg' title='Get Started Now' onClick={()=>console.log('claim deal')}/>
                            </a>

                            <NavLink to={`${basePath}/pricing`} className='col-md-6'>
                            <FlatButton title='View Pricing' onClick={()=>{console.log('view price')}} className='btnoutline btn-lg'/>

                            </NavLink>
                            
                            
                            </div>
                            {/* <CountdownTimer/> */}
                        </div>
                        <br/> <br/> 
                        </div>
                       
                    </div>
                    
                   
              
            </div>
        </section>
    )
}