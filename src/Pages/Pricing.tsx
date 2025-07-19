
import { Helmet } from "react-helmet-async";
import { PricingPlan } from "../shared/Types";
import { useLocation } from "react-router-dom";
import { getBasePath } from "../shared/getBasePath";

export const Pricing = ({pricingPlans}:PricingPlan)=>{
  const location = useLocation();
  const basePath = getBasePath(location.pathname);
      const handleRequest = (message: string) => {
    const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

    return(
      <>
      <Helmet>
        <title>Jozzy Codes Pricing | Custom Website Development Rates by Jozzy Codes</title>
        <link rel="canonical" href={`https://jozzycodes.com${basePath}/pricing`}/>
        <meta
          name="description"
          content="Explore transparent pricing for custom website development services. Find plans and rates tailored to deliver stunning, high-performance websites that represent your brand perfectly."
        />
      </Helmet>
      
       <section>
        

      <div className="container-fluid">
        <div style={{ textAlign: 'center' }}>
          <h2>Our Pricing</h2>
          <h4>Custom Website Development Pricing</h4>
          <p>
            We design and develop websites that are simple, functional, and elegant, tailored to your unique needs
            while maintaining high industry standards for performance, security, and user experience.
          </p>
        </div>

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div className="col-md-4" key={index}>
              <div className="pricing-grid">
                <h4>{plan.title}</h4>
                <p>{plan.description}</p>

                {plan.originalPrice && plan.discount && (
                  <div className="discount">
                    <s>{plan.originalPrice}</s> - save {plan.discount}
                  </div>
                )}

                {plan.price && <h3>{plan.price}</h3>}

                { plan.features && plan.features.length > 0 && (
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}

                <div>
                  <button className="btn" onClick={() => handleRequest(plan.message)}>
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
      
    )
}