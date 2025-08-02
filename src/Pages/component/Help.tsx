import { useTranslation } from "react-i18next";

export const Help = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div style={{ textAlign: "center" }}>
            <small>{t("help.label")}</small>
            <h3>{t("help.title")}</h3>
            <p>{t("help.description")}</p>
            <a
              href="https://wa.link/ubp14t"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">
                {t("help.buttonText")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
