import PersonImage from '../assets/person2Image.png'
export const Reason = ()=>{
    return (
        <section id='reason'>
            <div className="container-fluid">
            
                <div className="row">

                    <div className="col-md-6 " style={{display:'flex', justifyContent:'center'}}>
                        <div className='reasonImage'></div>
                    </div>
                    <div className="col-md-6 centerDiv">
                        <small>Solve Problems</small>
                        <h3>Why choose us?</h3>
                        <p style={{marginTop:"40px"}} >
                        We build professional, user-friendly,
                         and high-performing websites tailored to your business needs.
                          From design and development to hosting, domain management, and ongoing maintenance,
                           we handle everything—ensuring your website stays fast, secure, and always online. With our expertise,
                         you can focus on growing your business while we take care of the technology.


                        
                        </p>
                        <br/> <br/>
                        <div>
                        <button className='btn'>Let's Talk</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}