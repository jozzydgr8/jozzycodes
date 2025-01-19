import PersonImage from '../assets/personImage.png'
export const Header = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                
                    
                    <div className="col-md-4">
                        <small>We are innovative!</small>
                        <h1 className='custom-underline'>
                            Your Trusted Partner for Stunning,<br/> User-Friendly Websites
                        </h1>
                        <p>
                            We design user-friendly, responsive, and
                            professional websites tailored to your business needs,
                            ensuring your online presence stands out and delivers exceptional results to your audience.
                            <br/> <br/>
                            Want to give us a shot? <b>Get in Touch</b>
                        </p>
                       
                    </div>
                    <div className="col-md-8">
                        <div>
                            <img src={PersonImage} />
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}