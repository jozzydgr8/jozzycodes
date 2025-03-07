import { NavLink } from 'react-router-dom'
import darkLogo from '../assets/logo-black.png'
import lightLogo from '../assets/white-logo.png'
import { clickRenderProps } from '../Types'

export const Navbar = ({clicked, onClick}:clickRenderProps)=>{
    return(

                <>
                <nav className="navbar navbar-expand-lg " data-bs-theme='light'>
                  <div className="container-fluid">
                  {
                      clicked === true ? <img className='navbar-brand' src={lightLogo} alt='logo'/>:
                      <img className='navbar-brand' src={darkLogo} alt='logo'/>
                    }
                    {/* <a className='navbar-brand'>Jozzy Codes</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <NavLink to={'/'} className={'nav-link active'}>Home</NavLink>
                          
                        </li>
                        
                        <li className="nav-item">
                        <a href={'/#services'} className={'nav-link'}>Features</a>
                        </li>
                        <li className="nav-item">
                          <NavLink className={'nav-link'} to={'pricing'}>Pricing</NavLink>
                        {/* <a className="nav-link" href="#">Pricing</a> */}
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