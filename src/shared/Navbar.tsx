import { NavLink, useLocation } from 'react-router-dom'
import darkLogo from '../assets/logo-black.png'
import { getBasePath } from './getBasePath'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  const location = useLocation()
  const basePath = getBasePath(location.pathname)
  const { t } = useTranslation()

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme='light'>
      <div className="container-fluid">
        <img className='navbar-brand' src={darkLogo} alt='logo' />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={`${basePath}`} className="nav-link active">
                {t("nav.home")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`${basePath}/pricing`} className="nav-link">
                {t("nav.pricing")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`${basePath}/portfolio`} className="nav-link">
                {t("nav.portfolio")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={`${basePath}/blog`} className="nav-link">
                {t("nav.articles")}
              </NavLink>
            </li>

            <li className="nav-item">
              <a href="https://wa.link/ubp14t" target="_blank" rel="noreferrer">
                <button className="btn">{t("nav.contact")}</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
