import { ReasonData } from "../../Data"

export const Reason = ()=>{
    return (
        <section id='reason'>
            <div className="container-fluid">
                <h2>Why Us?</h2>
                <div className="row">
                    {
                        ReasonData.map((data,index)=>(
                            <div className="col-md-6" key={index}>
                                <div className="row animate-up" >
                                    <div className="col-md-2">
                                        <img src={data.image} style={{width:"70px", height:"70px"}} alt='jozzy codes'/>
                                    </div>
                                    <div className="col-md-10">
                                        <h5>{data.title}</h5>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                
            </div>
        </section>
    )
}