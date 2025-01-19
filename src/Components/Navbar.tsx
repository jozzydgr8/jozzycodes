import darkLogo from '../assets/logo-black.png'
import lightLogo from '../assets/white-logo.png'
import { clickRenderProps } from '../Types'

export const Navbar = ({clicked, onClick}:clickRenderProps)=>{
  console.log(clicked)
    return(
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    {
      clicked === true ? <img className='navbar-brand' src={lightLogo} alt='logo'/>:
      <img className='navbar-brand' src={darkLogo} alt='logo'/>
    }
    <button className="navbar-toggler" type="button" data-bs-onclick="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <button onClick={onClick}> <ion-icon name="moon-outline"></ion-icon> {!clicked?'Dark mode':'Light mode'}</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}