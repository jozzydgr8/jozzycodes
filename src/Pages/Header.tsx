import PersonImage from '../assets/personImage.png'
export const Header = ()=>{
    const imageStyle = {
        backgroundImage:`url(${PersonImage})`,
         height:'40vh',
         backgroundSize:'cover',
         backgroundPosition:'center center'
    }
    return(
        <section id='header'>
            <div className="container-fluid">
                <div className="row">
                
                    
                    <div className="col-md-4 centerDiv">
                        <small>We are innovative!</small><br/>
                        <h1 >
                            Your Trusted Partner for Stunning,<br/> User-Friendly Websites
                        </h1>
                        <span className='custom-underline'></span> <br/>
                        <p>
                            We build user-friendly, responsive, and
                            professional websites tailored to your business needs,
                            ensuring your online presence stands out and delivers exceptional results to your audience.
                            <br/> <br/>
                            Want to give us a shot? 
                        </p>
                        
                        <div>
                        <button className='btn'>Contact Us</button>
                        </div> <br/> <br/>
                       
                    </div>
                    <div className="col-md-8 header-grid">
                        <div className='headerImageDiv'>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}