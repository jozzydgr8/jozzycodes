
import { useTranslation } from "react-i18next";


export const Help = () => {

    const { t } = useTranslation();


    return (
        <section className="help-section">

            <div className="container-fluid">

                <div className="help-content">

                    {/* Label */}

                    <div className="help-label">

                        <span className="help-label-line"></span>

                        <small>
                            {t("help.label")}
                        </small>

                        <span className="help-label-line"></span>

                    </div>


                    {/* Main Heading */}

                    <h1 className="help-title">
                        {t("help.title")}
                    </h1>


                    {/* Description */}

                    <p className="help-description">
                        {t("help.description")}
                    </p>


                    {/* CTA */}

                    <div className="help-action">

                        <a
                            href="https://wa.link/ubp14t"
                            target="_blank"
                            rel="noreferrer"
                            className="help-button"
                        >
                            <span>
                                {t("help.buttonText")}
                            </span>

                            <span className="help-button-arrow">
                                ↗
                            </span>
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

