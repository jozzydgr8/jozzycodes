import { NavLink, useLocation } from "react-router-dom"
import { getBasePath } from "../../shared/getBasePath";
import desktop from '../../assets/desktop.png';
import { LoopText } from "./LoopText";
import { FlatButton } from "../../shared/FlatButton";
import {RightOutlined} from '@ant-design/icons';
import { FallingText } from "./FallingText";
export const Services = ()=>{
    const location = useLocation();
    const basePath = getBasePath(location.pathname);
    const loopTexts = [
      "Welcome to Our World",
      "Custom sites, Done Right",
      "Design. Speed. Performance.",
      "Start Your Project Today"
    ];
  
    return(
        <section id="services">
            <div className="container-fluid">
                <h2>Our Services</h2><br/>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className="servicecontainer">
                        
                    <div>
                        <img src={desktop} height={'200px'} width={'200px'} alt='jozzy codes'/>
                    </div>
                    <h5>Custom Website Development</h5>
                    <p>We build all kinds of Websites</p>
                    <NavLink to={`${basePath}/pricing`}><FlatButton title="View Pricing" className="btnoutlinelight" icon={<RightOutlined/>}/></NavLink>
                </div>
                </div>
                <br/>
                    <LoopText loopTexts={loopTexts} as="h1"/>
                    <FallingText/>
                   
            </div>
        </section>
    )
}