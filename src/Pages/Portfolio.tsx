import { portfolioData } from "../Data"
import {Helmet} from 'react-helmet-async'
import { getBasePath } from "../shared/getBasePath"
import { useLocation } from "react-router-dom"
import { LoopText } from "./component/LoopText"

const Style = {
    imageContent:{
        backgroundSize:'cover',
        backgroundPosition:'center center',
        height:"200px",
        backgroundRepeat:'no-repeat'
    }
}
const loopTexts = [
    'Hall of websites built right',
    'Custom coded client projects',
    'Brand first digital experiences'
]
export const Portfolio = ()=>{
    const location = useLocation()
    const basePath = getBasePath(location.pathname)
    return(
        <>
        <Helmet>
            <title>Jozzy Codes Portfolio | Custom Websites Developed by Jozzy Codes</title>
            <link rel='canonical' href={`https://jozzycodes.com${basePath}/portfolio`}/>
            <meta
                name="description"
                content="A showcase of our projects and work. See how we build stunning, custom websites crafted to perform and represent each brand with precision."
            />
        </Helmet>

        <section className="linearbackground">
            <div className="container-fluid">
              
                <h1 style={{fontSize:"30px", color:'#577BC1'}}>
                Portfolio
                </h1>
                <LoopText loopTexts={loopTexts} as="h1" style={{fontSize:"30px",textAlign:"left"}}/>
                <br/>
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