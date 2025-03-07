import { NavLink } from "react-router-dom"

export const Services = ()=>{
    return(
        <section id="services">
            <div className="container-fluid">
                <h3 style={{textAlign:'center'}}>Our Services</h3><br/>
                <div className="row">
                    <div className="col-md-4">
                        
                        <div className="service-grid">
                        <h4><ion-icon style={{fontSize:'35px'}} name="code-slash-outline"></ion-icon><br/>Custom Website development</h4>
                        <p>
                        We specialize in creating tailor-made websites that perfectly align with your business goals.
                        Our custom website development services are designed to provide unique, scalable,
                        and responsive web solutions
                        that give your business a competitive edge.

                        <br/><br/>
                        
                        </p>
                        <div className="service-link"><NavLink to={'/pricing'}> View Pricing</NavLink><ion-icon name="arrow-forward-outline"></ion-icon></div>
                        </div>
                        <br/><br/>
                    </div>
                    <div className="col-md-4">
                    
                        <div className="service-grid">
                        <h4><ion-icon style={{fontSize:'35px'}} name="cart-outline"></ion-icon><br/>E-commerce Solutions</h4>
                        <p >
                        We help businesses sell online easily with our complete e-commerce solutions.
                         Whether you're starting a new online store or improving an existing one,
                          we create custom websites that make it simple for customers to order products, book hotel rooms,
                           or schedule services. Our goal is to make online shopping smooth for both you and your customers,
                            helping your business grow while providing a great experience for buyers.

                        <br/><br/>
                        
                        </p>
                        <div className="service-link"><NavLink to={'/pricing'}> View Pricing</NavLink><ion-icon name="arrow-forward-outline"></ion-icon></div>
                        </div>
                        <br/><br/>
                    </div>
                    <div className="col-md-4">
                        <div className="service-grid">
                        <h4><ion-icon style={{fontSize:'35px'}} name="settings-outline"></ion-icon><br/>Website Maintenance</h4>
                         <p>
                         We take care of everything your website needs to stay online and run smoothly.
                          From hosting and domain management to security updates and performance optimization,
                           we handle it all—so you can focus on your business while we keep your website fast,
                            secure, and up to date.









                            <br/><br/>
                            
                        
                         </p>
                         <div className="service-link"><a href='https://wa.link/ubp14t' target='_blank'>Discover more</a><ion-icon name="arrow-forward-outline"></ion-icon></div>
                        </div>
                        <br/><br/>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}