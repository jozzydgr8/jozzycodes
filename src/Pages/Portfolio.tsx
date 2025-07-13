import { portfolioData } from "../Data"

const Style = {
    imageContent:{
        backgroundSize:'cover',
        backgroundPosition:'center center',
        height:"200px",
        backgroundRepeat:'no-repeat'
    }
}
export const Portfolio = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h3 style={{textAlign:"center"}}>Portfolio</h3>
                <div className="advertGrid">
                {
                portfolioData.map((data)=>(
                    <div key={data.id} className="advertDisplay">
                        <div style={{...Style.imageContent, backgroundImage:`url(${data.image})`}}>

                        </div>
                        <div><a style={{display:"flex", alignItems:"center", gap:'2px'}} href={data.link} target="_blank" rel="no-referrer"><ion-icon name="link-outline"></ion-icon>{data.title}</a></div>
                    </div>
                ))
                }
                </div>
            </div>
        </section>
    )
}