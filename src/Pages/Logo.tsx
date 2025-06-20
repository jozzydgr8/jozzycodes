import { Logos } from "../Data"

export const Logo = ()=>{
    return(
        <section className="logos" style={{background:'white'}} >
            <div className="container-fluid" >
                <div className="logo-grid" >
                    {Logos.map((data, index)=>(
                        <a key={index} href={`${data?.url}`}>
                            <div className="logo-display" style={{backgroundImage:`url(${data.image})`}}>

                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}