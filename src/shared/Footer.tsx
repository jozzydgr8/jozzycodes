import { NavLink, useLocation } from 'react-router-dom';
import lightIcon from '../assets/white-logo.png';
import { getBasePath } from './getBasePath';
import {PhoneOutlined, EnvironmentOutlined} from '@ant-design/icons'

import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const basePath = getBasePath(location.pathname);

  return (
    <footer className="footer-section">
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
                  <ion-icon name="phone-portrait-outline"></ion-icon> +234 811 3828 486
                </a>
              </div>
              <div>
                {t('footer.contact.message')}<br />
                <a href="https://wa.link/ubp14t" target="_blank" rel="noreferrer">
                  {t('footer.contact.whatsapp')}
                  <ion-icon name="logo-whatsapp"></ion-icon> +234 811 3828 486
                </a>
              </div>
              <br />
            </div>

            <div className="col-md-3" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
              <small className="heading">{t('footer.quickLinks.heading')}</small>
              <a href="/#philosophy">{t('footer.quickLinks.about')}</a>
              <a href={`${basePath}#pricing`}>{t('footer.quickLinks.development')}</a>
              <a href={`${basePath}#services`}>{t('footer.quickLinks.services')}</a>
              <small className="heading">{t('footer.quotes.heading')}</small>
              <br />
            </div>

            <div className="col-md-3 d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-1">
                <PhoneOutlined />
                <span>+234 811 3828 486</span>
              </div>

              <div className="d-flex align-items-center gap-1">
                <EnvironmentOutlined />
                <span>Lagos, Nigeria</span>
              </div>
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
    </footer>
  );
};
