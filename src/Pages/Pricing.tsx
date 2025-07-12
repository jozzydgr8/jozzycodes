
import { PricingPlan } from "../shared/Types";

export const Pricing = ({pricingPlans}:PricingPlan)=>{
      const handleRequest = (message: string) => {
    const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
    return(
       <section>
      <div className="container-fluid">
        <div style={{ textAlign: 'center' }}>
          <h3>Our Pricing</h3>
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
    )
}