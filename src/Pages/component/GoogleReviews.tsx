import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FlatButton } from "../../shared/FlatButton";
import { GoogleCircleFilled } from "@ant-design/icons";

export const GoogleReviews = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <p>{t("googleReviews.label")}</p>
            <h3>{t("googleReviews.title")}</h3>
            <div>
              <a
                href="https://g.page/r/CVLKVoD-XHaOEBM/review"
                target="_blank"
                rel="noreferrer"
              >
                <FlatButton
                  title={t("googleReviews.buttonText")}
                  icon={<GoogleCircleFilled />}
                />
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="fade-marquee">
              <div
                className="sk-ww-google-reviews"
                data-embed-id="25579832"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
