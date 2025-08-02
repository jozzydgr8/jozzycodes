import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getBasePath } from "../shared/getBasePath";
import { useTranslation } from "react-i18next";
import { plans, PricingPlan } from "../shared/Types";

export const Pricing = ({ pricingPlans }:PricingPlan) => {
  const location = useLocation();
  const basePath = getBasePath(location.pathname);
  const { t } = useTranslation();

  // Translate a single plan using i18n
  const translatePlan = (plan: plans) => {
  const key = plan.id.split(":")[0]; // e.g. 'business'
  return {
    ...plan,
    title: t(`pricing.${key}.title`),
    description: t(`pricing.${key}.description`),
    originalPrice: plan.originalPrice ? t(`pricing.${key}.originalPrice`) : undefined,
    discount: plan.discount ? t(`pricing.${key}.discount`) : undefined,
    price: plan.price ? t(`pricing.${key}.price`) : undefined,
    features: plan.features?.map((_, idx) => t(`pricing.${key}.features.${idx}`)) || [],
    buttonText: t(`pricing.${key}.buttonText`),
    renewalNote: plan.renewalNote ? t(`pricing.${key}.renewalNote`) : undefined,
    message: t(`pricing.${key}.message`),
  };
};

  const translatedPlans = pricingPlans.map(translatePlan);

  const handleRequest = (message: string) => {
    const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>pricing</title>
        <link rel="canonical" href={`https://jozzycodes.com${basePath}/pricing`} />
        <meta
          name="description"
          content={t("pricing.pageDescription")}
        />
      </Helmet>

      <section className="linearbackground">
        <div className="container-fluid">
          <div style={{ textAlign: "center" }}>
            <h2>{t("pricing.heading")}</h2>
            <h4>{t("pricing.subheading")}</h4>
          </div>

          <div className="row">
            {translatedPlans.map((plan, index) => (
              <div className="col-md-4" key={plan.id || index}>
                <div className="pricing-grid">
                  <h4>{plan.title}</h4>
                  <p>{plan.description}</p>

                  {plan.originalPrice && plan.discount && (
                    <div className="discount">
                      <s>{plan.originalPrice}</s> - {plan.discount}
                    </div>
                  )}

                  {plan.price && <h3>{plan.price}</h3>}

                  {plan.features && plan.features.length > 0 && (
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <div>
                    <button
                      className="btn btnoutlinelight"
                      onClick={() => handleRequest(plan.message)}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
                {plan.renewalNote && <div>{plan.renewalNote}</div>}
                <br />
              </div>
            ))}
          </div>
        </div>
        <br />
      </section>
    </>
  );
};
