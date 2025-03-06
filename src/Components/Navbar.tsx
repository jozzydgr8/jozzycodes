import darkLogo from '../assets/logo-black.png'
import lightLogo from '../assets/white-logo.png'
import { clickRenderProps } from '../Types'

export const Navbar = ({clicked, onClick}:clickRenderProps)=>{
  console.log(clicked)
    return(

                <>
                <nav className="navbar navbar-expand-lg " data-bs-theme='light'>
                  <div className="container-fluid">
                  {/* {
                      clicked === true ? <img className='navbar-brand' src={lightLogo} alt='logo'/>:
                      <img className='navbar-brand' src={darkLogo} alt='logo'/>
                    } */}
                    <a className='navbar-brand'>Jozzy Codes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                          <a><button className='btn' onClick={onClick}> Toggle Night </button></a>
                        
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                </>
    )
}