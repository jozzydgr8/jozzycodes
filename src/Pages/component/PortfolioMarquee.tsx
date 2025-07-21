import Marquee from "react-fast-marquee"
import { portfolioData } from "../../Data"
import { NavLink, useLocation } from "react-router-dom"
import { getBasePath } from "../../shared/getBasePath"
import { FlatButton } from "../../shared/FlatButton"
import {RightOutlined} from '@ant-design/icons'

export const PortfolioMarquee = ()=>{
    const location = useLocation();
    const basepath = getBasePath(location.pathname)
    return(
        <section className="linearbackground">
            <div className="container-fluid">
                <h2>Projects</h2>
                <div className="fade-marquee">
                    <Marquee direction="right">
                {portfolioData.map((portfolio,index)=>(
                
                <div key={index}  style={{height:"100px",
                 
                width:'200px', backgroundImage:`url(${portfolio.image})`,
                backgroundSize:"cover",
                 backgroundRepeat:"no-repeat", backgroundPosition:"center center", margin:"50px"}}>
                    
                </div>
                
            ))}
            </Marquee>
                </div>

                <div className="fade-marquee">
                    <Marquee>
                {portfolioData.map((portfolio,index)=>(
                
                <div key={index}  style={{height:"100px",
                 
                width:'200px', backgroundImage:`url(${portfolio.image})`,
                backgroundSize:"cover",
                 backgroundRepeat:"no-repeat", backgroundPosition:"center center", margin:"20px"}}>
                    
                </div>
                
            ))}
            </Marquee>
                </div>

                <div><NavLink to={`${basepath}/pricing`}><FlatButton className="btn-lg" title="View Projects" icon={<RightOutlined/>}/></NavLink></div>
            </div>
        </section>
    )
}