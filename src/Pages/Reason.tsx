import PersonImage from '../assets/person2Image.png'
export const Reason = ()=>{
    return (
        <section>
            <div className="container-fluid">
            
                <div className="row">

                    <div className="col-md-6">
                        <img src={PersonImage} alt='person'/>
                    </div>
                    <div className="col-md-6">
                        <small>Solve Problems</small>
                        <h1>Why choose us?</h1>
                        <p style={{marginTop:"40px"}} >
                            Our process and product is all about delivering fast, hassle-free web solutions that are 
                            mobile friendly and designed to solve your business challenges. We deliver visually appealing, functional
                            websites tailored to your needs, ensuring seamless user experiences and problem-solving results.
                            Ensuring business growth.


                        
                        </p>
                        <br/> <br/>
                        <button>Discover More</button>
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}