import { useEffect } from 'react';
import curvedLine from '../../assets/curvedline.png'
import { FlatButton } from '../../shared/FlatButton';
import { NavLink, useLocation } from 'react-router-dom';
import { getBasePath } from '../../shared/getBasePath';
import { LoopText } from './LoopText';
import { useTranslation } from 'react-i18next';


export const LagosHeader = ()=>{
    useEffect(()=>{
      const containers = document.querySelectorAll('.headerWrite');

        containers.forEach((el) => {
        el.classList.add('sectionAnimationUp');
        });
    },[]);
    const location = useLocation();
    const basePath = getBasePath(location.pathname);
     const { t, i18n } = useTranslation();

 
  const loopTexts = t('lagosHeader.loopTexts', { returnObjects: true }) as string[];
    

    return(
        <section className='linearbackground'>
            <div className="container-fluid">
    <div>

    </div>

                <div className='headerWrite' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',fontSize:"medium"}}>
                
                    
                    <div className="centerDiv">
                        <LoopText loopTexts={loopTexts} as="span"/><br/>
                        
                            <h1 style={{textAlign:'center'}}>
                            {t('lagosHeader.title')}
                            </h1>
                
                        <div style={{display:"flex", justifyContent:"center"}} >
                            <img src={curvedLine} style={{width:'80%'}} alt='jozzy codes'/>
                        </div>
                        <span className='custom-underline'></span> <br/>
                        <p style={{textAlign:'center'}}>
                        {t('lagosHeader.subtitle')}
                        <br /> <br />
                        {t('lagosHeader.wantToGiveShot')}
                        </p>
                        <div style={{display:"flex", justifyContent:"center"}} >
                            
                            <div className='row justify-content-center text-center'>
                            <a href='https://wa.link/ubp14t' target='_blank' rel='noreferrer' className='col-md-6' style={{marginBottom:'20px'}}>
                            <FlatButton className='btn-lg' title={t('lagosHeader.ctaGetStarted')} />
                            </a>

                            <NavLink to={`${basePath}/pricing`} className='col-md-6'>
                            <FlatButton title={t('lagosHeader.ctaViewPricing')} className='btnoutline btn-lg' />

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