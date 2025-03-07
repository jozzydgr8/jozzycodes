export const Pricing = ()=>{
    const ecommerceRequest = async ()=>{
        const message ="Hey there! I came across your website and I'm interested in your e-commerce web development services. I'd love to learn more!"
        const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
         window.open(whatsappURL, '_blank');
    }
    const businessRequest = async ()=>{
        const message ="Hey there! I came across your website and I'm interested in your Business web development services. I'd love to learn more!"
        const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
         window.open(whatsappURL, '_blank');
    }
    const customRequest = async ()=>{
        const message ="Hey there! I came across your website and I'm interested in your custom website development services. I'd love to learn more!"
        const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
         window.open(whatsappURL, '_blank');
    }
    
    return(
        <section>
            <div className="container-fluid">
                <div style={{textAlign:'center'}}>
                <h3>Our Pricing</h3>
                <h4>Custom Website Development Pricing</h4>
                <p>We design and develop websites that are simple,
                     functional, and elegant, tailored to your unique needs while maintaining high industry standards for performance,
                     security, and user experience.
                </p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="pricing-grid">
                            <h4>Business Websites</h4>
                            <p>Showcase your business info, services and contact details</p>
                            <div className="discount"> <s>₦200K</s> - save 50%</div>
                            <h3>₦100K</h3>
                            <ul>
                                <li>
                                    Custom responsive website (mobile & desktop friendly)
                                </li>
                                <li>
                                    Fast and Secure Hosting
                                </li>
                                <li>
                                    Domain Integration and Setup
                                </li>
                                <li>
                                    CTA for customer inquiries
                                </li>
                                <li>
                                    integration with social media pages
                                </li>
                                <li>
                                    Free maintenance & Support for one year
                                </li>
                            </ul>

                            <div>
                                <button className="btn" onClick={businessRequest}>Get Started</button>
                            </div>
                        </div>
                        * Billed as ₦70,000 yearly (renewal)
                        <br/>
                    </div>
                   
                    <div className="col-md-4">
                        <div className="pricing-grid">
                            <h4>E-commerce & Booking websites</h4>
                            <p>Includes everything in a business website plus online ordering,
                                 payments or booking functionality
                            </p>
                            <div className="discount"><s>₦375k</s> - save 47%</div>
                           <h3>₦200k</h3>
                           <ul>
                                <li>
                                    Online Store Setup with product or service listings
                                </li>
                                <li>
                                    Fast and Secure Hosting
                                </li>
                                <li>
                                    Domain Integration and Setup
                                </li>
            
                                <li>
                                    Secure Payment Gateway
                                </li>
                                <li>
                                    Cart and Checkout Process
                                </li>
                                <li>
                                    Appointment Booking Systems (for salons, hotels etc.)
                                </li>
                                <li>
                                    Order management and notifications
                                </li>
                                <li>
                                    Customer Login and account management if needed
                                </li>
                                <li>
                                    Admin Dashboard
                                </li>
                                <li>
                                    CTA for customer inquiries
                                </li>
                                <li>
                                    integration with social media pages
                                </li>
                                <li>
                                    Free maintenance & Support for one year
                                </li>
                            </ul>
                            <div>
                                <button className="btn" onClick={ecommerceRequest}>Get Started</button>
                            </div>
                        </div>
                        * Billed as ₦100,000 yearly (renewal)
                        <br/>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="pricing-grid">
                            <h4>Custom or Advanced websites</h4>
                            <p>
                            For businesses that need more than a standard website,
                             custom solutions with features like membership systems, dashboards, and integrations tailored to your needs.
                            </p>
                            <div>
                            <button className="btn" onClick={customRequest}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <br/>
        </section>
    )
}