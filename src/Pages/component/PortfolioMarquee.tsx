import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { portfolioData } from "../../Data";
import { NavLink, useLocation } from "react-router-dom";
import { getBasePath } from "../../shared/getBasePath";
import { FlatButton } from "../../shared/FlatButton";
import { RightOutlined } from "@ant-design/icons";

export const PortfolioMarquee = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const basepath = getBasePath(location.pathname);

  return (
    <section className="linearbackground">
      <div className="container-fluid">
        <h2>{t("portfolioMarquee.heading")}</h2>

        <div className="fade-marquee">
          <Marquee direction="right">
            {portfolioData.map((portfolio, index) => (
              <div
                key={index}
                style={{
                  height: "100px",
                  width: "200px",
                  backgroundImage: `url(${portfolio.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  margin: "50px"
                }}
              ></div>
            ))}
          </Marquee>
        </div>

        <div className="fade-marquee">
          <Marquee>
            {portfolioData.map((portfolio, index) => (
              <div
                key={index}
                style={{
                  height: "100px",
                  width: "200px",
                  backgroundImage: `url(${portfolio.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  margin: "20px"
                }}
              ></div>
            ))}
          </Marquee>
        </div>

        {/* <div>
          <NavLink to={`${basepath}/portfolio`}>
            <FlatButton title={t("portfolioMarquee.buttonText")} icon={<RightOutlined />} />
          </NavLink>
        </div> */}
      </div>
    </section>
  );
};
