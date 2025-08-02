import { NavLink, useLocation } from 'react-router-dom';
import lightIcon from '../assets/white-logo.png';
import { getBasePath } from './getBasePath';

import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const basePath = getBasePath(location.pathname);

  return (
    <section className="footer-section">
      <div className="container-fluid">
        <footer>
          <div className="row">
            <div className="col-md-3" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
              <img src={lightIcon} alt="jozzy_codes logo" className="footer-icon heading" />
              <div>{t('footer.social')}</div>
              <br />
            </div>

            <div className="col-md-3" style={{ display: 'flex', gap: '25px', flexDirection: 'column' }}>
              <small className="heading">{t('footer.contact.heading')}</small>
              <div>
                {t('footer.contact.talk')}<br />
                <a href="tel:08113828486">
                  {t('footer.contact.callUs')}
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                </a>
              </div>
              <div>
                {t('footer.contact.message')}<br />
                <a href="https://wa.link/ubp14t" target="_blank" rel="noreferrer">
                  {t('footer.contact.whatsapp')}
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </div>
              <br />
            </div>

            <div className="col-md-3" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
              <small className="heading">{t('footer.quickLinks.heading')}</small>
              <a href="/#philosophy">{t('footer.quickLinks.about')}</a>
              <NavLink to={`${basePath}pricing`}>{t('footer.quickLinks.development')}</NavLink>
              <NavLink to={`${basePath}pricing`}>{t('footer.quickLinks.services')}</NavLink>
              <br />
            </div>

            <div className="col-md-3" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
              <small className="heading">{t('footer.quotes.heading')}</small>
              <NavLink to={`${basePath}pricing`}>{t('footer.quotes.ecommerce')}</NavLink>
              <NavLink to={`${basePath}pricing`}>{t('footer.quotes.business')}</NavLink>
            </div>
          </div>
          <hr />
          <small>
            <a href="https://jozzycodes.com" target="_blank" rel="noreferrer">
              {t('footer.rights')}
            </a>
          </small>
        </footer>
      </div>
    </section>
  );
};
