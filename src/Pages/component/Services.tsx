import { NavLink, useLocation } from "react-router-dom"
import { getBasePath } from "../../shared/getBasePath";
import desktop from '../../assets/desktop.png';
import { LoopTest } from "./LoopTest";
import { FlatButton } from "../../shared/FlatButton";
import {RightOutlined} from '@ant-design/icons';
export const Services = ()=>{
    const location = useLocation();
    const basePath = getBasePath(location.pathname);
  
    return(
        <section id="services">
            <div className="container-fluid">
                <h2>Our Services</h2><br/>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div className="servicecontainer">
                        {/* <motion.div
                        initial={{opacity:0,y:20}}
                        animate={{opacity:1,y:0}}
                        transition={{duration:0.4,delay: index * 0.05}}>
                            
                        </motion.div> */}
                    <div>
                        <img src={desktop} height={'200px'} width={'200px'}/>
                    </div>
                    <h5>Custom Website Development</h5>
                    <p>We build all kinds of Websites</p>
                    <NavLink to={`${basePath}/pricing`}><FlatButton title="View Pricing" icon={<RightOutlined/>}/></NavLink>
                </div>
                </div>
                    <LoopTest/>
                   
            </div>
        </section>
    )
}