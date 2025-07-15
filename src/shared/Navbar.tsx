import { NavLink, useLocation } from 'react-router-dom'
import darkLogo from '../assets/logo-black.png'
import { getBasePath } from './getBasePath';



export const Navbar = ()=>{
  const location = useLocation();
  const basePath = getBasePath(location.pathname);

    return(

                <>
                <nav className="navbar navbar-expand-lg " data-bs-theme='light'>
                  <div className="container-fluid">
                  
                      <img className='navbar-brand' src={darkLogo} alt='logo'/>
                    
                    {/* <a className='navbar-brand'>Jozzy Codes</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <NavLink to={`${basePath}`} className={'nav-link active'}>Home</NavLink>
                          
                        </li>
                        
                        
                        <li className="nav-item">
                          <NavLink className={'nav-link'} to={`${basePath}/pricing`}>Pricing</NavLink>
                        {/* <a className="nav-link" href="#">Pricing</a> */}
                        </li>
                        <li className="nav-item">
                          <NavLink className={'nav-link'} to={`${basePath}/portfolio`}>Portfolio</NavLink>
                       
                        </li>
                        <li className="nav-item">
                        <NavLink to={`${basePath}/blog`} className={'nav-link'}>Articles</NavLink>
                        </li>
                        
                        <li className="nav-item">
                        <a href='https://wa.link/ubp14t' target='_blank'><button className='btn'>Contact Us</button></a>
                          {/* <a><button className='btn' onClick={onClick}> Toggle Night </button></a> */}
                        
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                </>
    )
}