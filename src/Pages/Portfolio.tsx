import { portfolioData } from "../Data"
import {Helmet} from 'react-helmet-async'

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
        <>
        <Helmet>
            <title>Jozzy Codes Portfolio | Custom Websites Developed by Jozzy Codes</title>
            <meta
                name="description"
                content="A showcase of our projects and work. See how we build stunning, custom websites crafted to perform and represent each brand with precision."
            />
        </Helmet>

        <section>
            <div className="container-fluid">
                <h2>Portfolio</h2>
                <p style={{textAlign:"center", textTransform:'capitalize'}}>The hall of websites built right!</p>
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
        </>
        
    )
}