import { useEffect } from 'react';
import curvedLine from '../../assets/curvedline.png'
import { FlatButton } from '../../shared/FlatButton';
import { NavLink, useLocation } from 'react-router-dom';
import { getBasePath } from '../../shared/getBasePath';
import { LoopText } from './LoopText';


export const Header = ()=>{
    useEffect(()=>{
      const containers = document.querySelectorAll('.headerWrite');

        containers.forEach((el) => {
        el.classList.add('sectionAnimationUp');
        });
    },[]);
    const location = useLocation();
    const basePath = getBasePath(location.pathname);
    const loopTexts = [
  "Code, Create, Captivate",
  "Design, Develop, Deliver",
  "Build, Brand, Breakthrough"
];

    return(
        <section className='linearbackground'>
            <div className="container-fluid">
                <div className='headerWrite' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',fontSize:"medium"}}>
                
                    
                    <div className="centerDiv">
                        <LoopText loopTexts={loopTexts} as="span"/><br/>
                        
                            <h1 style={{textAlign:'center'}} >
                                
                            
                            Custom Websites Built Right From Day One.
                        </h1>
                
                        <div style={{display:"flex", justifyContent:"center"}} >
                            <img src={curvedLine} style={{width:'80%'}} alt='jozzy codes'/>
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