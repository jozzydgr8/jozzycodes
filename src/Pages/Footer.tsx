import lightIcon from '../assets/white-logo.png';
const footerStyle={
    
}
export const Footer = ()=>{
    return (
        <section className='footer-section'>
            <div className="container-fluid">
                <footer>
                    <div className="row">
                        <div className="col-md-3" style={{display:'flex', gap:'10px',flexDirection:'column'}} >
                        <img src={lightIcon} alt='jozzy_codes logo' className='footer-icon heading'/>
                        <div>
                            Fb./ Ig./ Tw./ Ln. / Whatsapp
                        </div>
                        </div>
                        <div className="col-md-3 " style={{display:'flex', gap:'25px',flexDirection:'column'}}>
                            <small className='heading'>Get in touch?</small>
                            <div>
                            Talk to someone?<br/>
                            <a href='tel:+2348113828486'>234 811 382 8486</a>
                            </div>


                            <div>
                                Send us a mail? <br/>
                                <a href='mailto:jozzydgreat1@gmail.com'>
                                    jozzycodes@gmail.com
                                </a>
                            </div>


                            

                        </div>
                        <div className="col-md-3" style={{display:'flex', gap:'10px',flexDirection:'column'}}>
                            <small className='heading'>Quick Links</small>
                            <a>About Us</a> 
                            <a>Web Design</a> 
                            <a>Our Services</a>
                            <a>Refund Policy</a>

                        </div>


                        <div className="col-md-3" style={{display:'flex', gap:'10px',flexDirection:'column'}}>
                            <small className='heading'>Request a Quote</small>
                            <a>Ecommerce Pricing</a>
                            <a>Web Design Pricing</a>
                            
                        </div>
                    </div>
                    <hr/>
                    <small>All Rights Reserved © jozzy-codes digital </small>
                </footer>
            </div>
        </section>
    )
}