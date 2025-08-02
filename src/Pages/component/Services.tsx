import { NavLink, useLocation } from "react-router-dom"
import { getBasePath } from "../../shared/getBasePath";
import desktop from '../../assets/desktop.png';
import { LoopText } from "./LoopText";
import { FlatButton } from "../../shared/FlatButton";
import {RightOutlined} from '@ant-design/icons';
import { FallingText } from "./FallingText";
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const basePath = getBasePath(location.pathname);

  const loopTexts = t('services.loopTexts', { returnObjects: true }) as string[];

  return (
    <section id="services">
      <div className="container-fluid">
        <h2>{t('services.title')}</h2><br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="servicecontainer">
            <div>
              <img src={desktop} height={'200px'} width={'200px'} alt="jozzy codes" />
            </div>
            <h5>{t('services.service.heading')}</h5>
            <p>{t('services.service.description')}</p>
            <NavLink to={`${basePath}/pricing`}>
              <FlatButton title={t('services.service.buttonText')} className="btnoutlinelight" icon={<RightOutlined />} />
            </NavLink>
          </div>
        </div>
        <br />
        <LoopText loopTexts={loopTexts} as="h1" />
        <FallingText />
      </div>
    </section>
  );
};
